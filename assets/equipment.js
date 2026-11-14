/* Equipment card: the bottom selector swaps the photo and the specs column. */
(() => {
  'use strict';

  const card = document.querySelector('.equipment-showcase-card');
  if (!card) return;

  const buttons = [...card.querySelectorAll('.model-thumb-card')];
  const photos = [...card.querySelectorAll('.model-large-img')];
  const slides = [...card.querySelectorAll('.model-specs-col')];
  let current = 0;

  const show = (index) => {
    if (index === current) return;
    current = index;
    buttons.forEach((button, i) => {
      button.classList.toggle('active', i === index);
      button.setAttribute('aria-pressed', String(i === index));
    });
    photos.forEach((photo, i) => photo.classList.toggle('is-active', i === index));
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
  };

  buttons.forEach((button, i) => button.addEventListener('click', () => show(i)));
})();
