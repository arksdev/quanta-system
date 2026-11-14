(() => {
  'use strict';

  const wrap = document.querySelector('.hero-laser-wrap');
  if (!wrap) return;

  const video = wrap.querySelector('.hero-laser-video');
  if (!video) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'hero-laser-canvas';
  canvas.setAttribute('aria-hidden', 'true');

  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
  if (!gl) return;

  const vsSource = `
    attribute vec2 a_pos;
    attribute vec2 a_uv;
    varying vec2 v_uv;
    void main() {
      gl_Position = vec4(a_pos, 0.0, 1.0);
      v_uv = a_uv;
    }
  `;

  const fsSource = `
    precision mediump float;
    uniform sampler2D u_tex;
    varying vec2 v_uv;
    void main() {
      vec4 col = texture2D(u_tex, v_uv);
      vec4 bg = texture2D(u_tex, vec2(0.015, v_uv.y));
      float d = length(col.rgb - bg.rgb);
      float a = clamp((d - 0.05) / 0.05, 0.0, 1.0);
      gl_FragColor = vec4(col.rgb, a);
    }
  `;

  function createShader(gl, type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  }

  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1, 0, 1,
       1, -1, 1, 1,
      -1,  1, 0, 0,
      -1,  1, 0, 0,
       1, -1, 1, 1,
       1,  1, 1, 0
    ]),
    gl.STATIC_DRAW
  );

  const a_pos = gl.getAttribLocation(program, 'a_pos');
  const a_uv = gl.getAttribLocation(program, 'a_uv');
  gl.enableVertexAttribArray(a_pos);
  gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 16, 0);
  gl.enableVertexAttribArray(a_uv);
  gl.vertexAttribPointer(a_uv, 2, gl.FLOAT, false, 16, 8);

  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  video.style.opacity = '0';
  video.style.pointerEvents = 'none';
  wrap.appendChild(canvas);

  function render() {
    if (video.readyState >= 2 && video.videoWidth > 0) {
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    if ('requestVideoFrameCallback' in video) {
      video.requestVideoFrameCallback(render);
    } else {
      requestAnimationFrame(render);
    }
  }

  video.addEventListener('play', () => {
    if ('requestVideoFrameCallback' in video) {
      video.requestVideoFrameCallback(render);
    } else {
      requestAnimationFrame(render);
    }
  });

  if (!video.paused) {
    if ('requestVideoFrameCallback' in video) {
      video.requestVideoFrameCallback(render);
    } else {
      requestAnimationFrame(render);
    }
  }

  video.play().catch(() => {});
})();
