/* Hero effects: (1) light rays over the hero gradient — a CSS port of the
   Magic UI "Light Rays" effect used on aurapass.me; (2) the machine shot
   cycles through three systems every 10s with a pixel-mosaic swap. */

(() => {
  'use strict';

  /* ---------------------------------------------------------- light rays */

  const RAYS = { count: 7, cycle: 12 }; /* cycle = longest pulse, seconds */

  function startLightRays(host) {
    const rays = Array.from({ length: RAYS.count }, () => `<div class="hero-rays__ray" style="
        --ray-left:${(8 + Math.random() * 84).toFixed(1)}%;
        --ray-width:${(160 + Math.random() * 160).toFixed(0)}px;
        --ray-rotate:${(-28 + Math.random() * 56).toFixed(1)}deg;
        --ray-swing:${(0.8 + Math.random() * 1.8).toFixed(2)}deg;
        --ray-duration:${(RAYS.cycle * (0.75 + Math.random() * 0.5)).toFixed(2)}s;
        --ray-delay:${(Math.random() * RAYS.cycle).toFixed(2)}s;
        --ray-intensity:${(0.6 + Math.random() * 0.5).toFixed(2)}"></div>`).join('');

    host.innerHTML = `<div class="hero-rays__layer">
      <div class="hero-rays__glow hero-rays__glow--a"></div>
      <div class="hero-rays__glow hero-rays__glow--b"></div>${rays}
    </div>`;
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

  const raysHost = document.querySelector('.hero-rays');
  if (raysHost) startLightRays(raysHost);

  const wrap = document.querySelector('.hero-laser-wrap');
  if (wrap) {
    const ready = [...wrap.querySelectorAll('.hero-laser-img')].map((img) =>
      img.decode().catch(() => {})
    );
    Promise.all(ready).then(() => startCarousel(wrap));
  }
})();
