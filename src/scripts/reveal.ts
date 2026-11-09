// Muestra con una transición los elementos `[data-reveal]` cuando entran en pantalla.
// Solo actúa con la clase `motion` (ver BaseLayout); sin ella, el CSS no los oculta.
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (document.documentElement.classList.contains('motion') && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}

// Cabecera: sombra al hacer scroll.
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const update = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}
