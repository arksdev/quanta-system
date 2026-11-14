/* Hero effects:
   1. light rays over the hero gradient — a trimmed port of the reactbits
      "Light Rays" shader, run at 20% opacity;
   2. the machine shot cycles through three systems every 10s with a
      pixel-mosaic swap. */

(() => {
  'use strict';

  /* ---------------------------------------------------------------- rays */

  const RAYS_VERT = `#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`;

  const RAYS_FRAG = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uScale;
uniform float uTime;
uniform vec2 uSource;
uniform vec2 uAim;
uniform float uReach;
uniform vec3 uColor;
uniform float uSpread;
uniform float uLength;
uniform float uFade;
uniform float uDensity;
uniform float uSharpness;
uniform float uGlow;
uniform float uHaze;
uniform float uSaturation;
uniform float uAtmosphere;
uniform float uOpacity;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), w.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), w.x), w.y);
}

float shape(float strength, float width) {
  float edge = max(mix(0.5, 0.08, uSharpness), width);
  return mix(strength, smoothstep(0.62 - edge, 0.62 + edge, strength), uSharpness);
}

void main() {
  vec2 coord = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y) / uScale;
  vec2 delta = coord - uSource;
  float distance = length(delta);
  vec2 dir = delta / max(distance, 1e-4);
  float cosAngle = dot(dir, uAim);
  float slope = fwidth(cosAngle);
  float depth = distance / uReach;

  float source = exp(-depth * depth * 9.0) * 0.9 + exp(-depth * 3.2) * 0.25;
  float pulse = 0.78 + 0.22 * sin(uTime * 0.9);
  float glowLight = uGlow * source * smoothstep(-0.2, 0.6, cosAngle) * pulse;
  float spread = pow(max(cosAngle, 0.0), 1.0 / uSpread);
  float lengthFalloff = clamp(1.0 - distance / (uReach * uLength), 0.0, 1.0);
  float fadeFalloff = clamp(1.0 - distance / (uReach * uFade), 0.5, 1.0);
  float envelope = spread * lengthFalloff * fadeFalloff;
  if (envelope * 1.6 + glowLight < 0.0015) { fragColor = vec4(0.0); return; }

  float phaseA = cosAngle * 36.2214 * uDensity + uTime * 1.5;
  float phaseB = -cosAngle * 21.11349 * uDensity + uTime * 1.5;
  float phaseC = cosAngle * 22.3991 * uDensity + uTime * 1.1;
  float phaseD = -cosAngle * 18.0234 * uDensity + uTime * 1.1;
  float strengthA = clamp(0.75 + 0.15 * sin(phaseA) + 0.2 * cos(phaseB), 0.0, 1.0);
  float strengthB = clamp(0.75 + 0.15 * sin(phaseC) + 0.2 * cos(phaseD), 0.0, 1.0);
  float widthA = abs(0.15 * 36.2214 * cos(phaseA) + 0.2 * 21.11349 * sin(phaseB)) * uDensity * slope;
  float widthB = abs(0.15 * 22.3991 * cos(phaseC) + 0.2 * 18.0234 * sin(phaseD)) * uDensity * slope;
  float rayLight = envelope * (0.5 * shape(strengthA, widthA) + 0.4 * shape(strengthB, widthB));

  float around = atan(uAim.x * dir.y - uAim.y * dir.x, cosAngle);
  vec2 drift = vec2(around * 2.2 + uTime * 0.22, depth * 2.6 - uTime * 0.5);
  float fog = 0.65 * valueNoise(drift * vec2(3.0, 1.0)) + 0.35 * valueNoise(drift * vec2(7.0, 2.3) + 4.1);
  rayLight *= mix(1.0, 0.25 + 1.2 * fog, uHaze);

  float light = rayLight + glowLight;
  float near = clamp(1.2 - distance / (uResolution.y / uScale), 0.0, 1.0);
  vec3 tint = mix(vec3(0.9), vec3(0.1, 0.3, 0.5) + near * vec3(0.8, 0.6, 0.5), uAtmosphere);
  float gray = dot(tint, vec3(0.299, 0.587, 0.114));
  vec3 hue = max(mix(vec3(gray), tint, uSaturation), 0.0) * uColor;

  float level = light < 0.75 ? light : 0.75 + 0.25 * (1.0 - exp(-(light - 0.75) / 0.25));
  float top = max(hue.r, max(hue.g, hue.b));
  hue = mix(hue, vec3(top), smoothstep(0.8, 1.0, level) * 0.45);
  vec3 shown = clamp(hue * level, 0.0, 1.0) * level;
  fragColor = vec4(shown * uOpacity, level * uOpacity);
}`;

  const RAYS = {
    color: [0.93, 0.98, 1.0],
    speed: 3,
    spread: 1.2,
    length: 2.5,
    fade: 1,
    density: 1.8,
    sharpness: 1,
    glow: 0.5,
    haze: 0.3,
    saturation: 1,
    atmosphere: 1,
    opacity: 0.2
  };

  function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('hero rays shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function link(gl, vertSource, fragSource) {
    const vert = compile(gl, gl.VERTEX_SHADER, vertSource);
    const frag = compile(gl, gl.FRAGMENT_SHADER, fragSource);
    if (!vert || !frag) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.deleteShader(vert);
    gl.deleteShader(frag);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('hero rays link:', gl.getProgramInfoLog(program));
      return null;
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i += 1) {
      const info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  }

  function startRays(canvas) {
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!gl) return;
    const shader = link(gl, RAYS_VERT, RAYS_FRAG);
    if (!shader) return;

    const u = shader.uniforms;
    const vao = gl.createVertexArray();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ratio = 1;
    let raf = 0;
    let last = 0;
    let time = 0;
    let running = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const cssWidth = Math.max(1, rect.width);
      const cssHeight = Math.max(1, rect.height);
      // soft by nature: render below CSS size so the shafts stay smooth
      ratio = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
      canvas.width = Math.round(cssWidth * ratio);
      canvas.height = Math.round(cssHeight * ratio);
      canvas.dataset.cssWidth = String(cssWidth);
      canvas.dataset.cssHeight = String(cssHeight);
    };

    const frame = (now) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      time += dt * RAYS.speed * (reduced ? 0.3 : 1);

      const width = Number(canvas.dataset.cssWidth);
      const height = Number(canvas.dataset.cssHeight);

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(shader.program);
      gl.bindVertexArray(vao);
      gl.uniform2f(u.uResolution, canvas.width, canvas.height);
      gl.uniform1f(u.uScale, ratio);
      gl.uniform1f(u.uTime, time);
      // the source drifts so the whole fan breathes instead of flickering in place
      const drift = Math.sin(time * 0.35);
      gl.uniform2f(u.uSource, width * (0.5 + 0.03 * drift), -height * (0.2 + 0.05 * drift));
      // the shafts sweep instead of following a cursor
      const sway = Math.sin(time * 0.55) * 0.26;
      const aimLength = Math.hypot(sway, 1);
      gl.uniform2f(u.uAim, sway / aimLength, 1 / aimLength);
      gl.uniform1f(u.uReach, Math.max(width, height));
      gl.uniform3f(u.uColor, RAYS.color[0], RAYS.color[1], RAYS.color[2]);
      gl.uniform1f(u.uSpread, RAYS.spread);
      gl.uniform1f(u.uLength, RAYS.length);
      gl.uniform1f(u.uFade, RAYS.fade);
      gl.uniform1f(u.uDensity, RAYS.density);
      gl.uniform1f(u.uSharpness, RAYS.sharpness);
      gl.uniform1f(u.uGlow, RAYS.glow);
      gl.uniform1f(u.uHaze, RAYS.haze);
      gl.uniform1f(u.uSaturation, RAYS.saturation);
      gl.uniform1f(u.uAtmosphere, RAYS.atmosphere);
      gl.uniform1f(u.uOpacity, RAYS.opacity);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      raf = requestAnimationFrame(frame);
    };

    const play = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const pause = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    play();

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pause();
      else play();
    });
    // the hero is 7846px from the bottom of the page: stop once it scrolls away
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !document.hidden) play();
        else pause();
      }, { threshold: 0 }).observe(canvas);
    }
  }

  /* ------------------------------------------------------------ carousel */

  const CYCLE_MS = 10000;
  const SWAP_MS = 900;
  const MAX_BLOCK = 14; /* CSS px — scaled to device pixels per frame */

  function fitRect(img, width, height) {
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    return [(width - w) / 2, (height - h) / 2, w, h];
  }

  function startCarousel(wrap) {
    const images = [...wrap.querySelectorAll('.hero-laser-img')];
    const canvas = wrap.querySelector('.hero-laser-fx');
    if (images.length < 2 || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const buffer = document.createElement('canvas');
    const bctx = buffer.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* the canvas is hidden while idle, so measure the wrapper instead */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(wrap.clientWidth * dpr);
      canvas.height = Math.round(wrap.clientHeight * dpr);
    };

    const draw = (from, to, progress) => {
      const w = canvas.width;
      const h = canvas.height;
      const cssScale = w / Math.max(1, wrap.clientWidth);
      const block = Math.max(1, (1 + (MAX_BLOCK - 1) * Math.sin(Math.PI * progress)) * cssScale);
      const bw = Math.max(2, Math.round(w / block));
      const bh = Math.max(2, Math.round(h / block));

      buffer.width = bw;
      buffer.height = bh;
      bctx.imageSmoothingEnabled = true;
      bctx.clearRect(0, 0, bw, bh);

      const kx = bw / w;
      const ky = bh / h;
      const drawFit = (img, alpha) => {
        const [x, y, dw, dh] = fitRect(img, w, h);
        bctx.globalAlpha = alpha;
        bctx.drawImage(img, x * kx, y * ky, dw * kx, dh * ky);
      };

      drawFit(from, 1);
      if (progress > 0) drawFit(to, progress * progress * (3 - 2 * progress));
      bctx.globalAlpha = 1;

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(buffer, 0, 0, bw, bh, 0, 0, w, h);
    };

    let index = 0;
    let busy = false;

    const next = () => {
      if (busy) return;
      busy = true;
      const from = images[index];
      index = (index + 1) % images.length;
      const to = images[index];

      if (reduced) {
        from.classList.remove('is-current');
        to.classList.add('is-current');
        busy = false;
        return;
      }

      resize();
      wrap.classList.add('is-swapping');
      const started = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - started) / SWAP_MS);
        draw(from, to, progress);
        if (progress < 1) {
          requestAnimationFrame(step);
          return;
        }
        from.classList.remove('is-current');
        to.classList.add('is-current');
        wrap.classList.remove('is-swapping');
        busy = false;
      };
      requestAnimationFrame(step);
    };

    resize();
    window.addEventListener('resize', resize);
    setInterval(next, CYCLE_MS);
    window.heroCarousel = { next };
  }

  const raysCanvas = document.querySelector('.hero-rays');
  if (raysCanvas) startRays(raysCanvas);

  const wrap = document.querySelector('.hero-laser-wrap');
  if (wrap) {
    const ready = [...wrap.querySelectorAll('.hero-laser-img')].map((img) =>
      img.decode().catch(() => {})
    );
    Promise.all(ready).then(() => startCarousel(wrap));
  }
})();
