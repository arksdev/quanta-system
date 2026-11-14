/* Header: the nav collapses into a burger below 1200px. */
(() => {
  'use strict';

  const header = document.querySelector('.header');
  const burger = header && header.querySelector('.header-burger');
  if (!burger) return;

  const setOpen = (open) => {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
  header.querySelectorAll('.header-menu-link').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
})();
