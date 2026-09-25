document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  menu.classList.toggle('is-open', !open);
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
  }
});

// Hero terminal: type "whoami", then the answer
const cmd = document.querySelector('.terminal__cmd');
const lines = ['whoami', 'vlad-baesu --role devops'];
if (cmd && !reduceMotion) {
  let line = 0;
  let i = 0;
  cmd.textContent = '';
  const tick = () => {
    const text = lines[line];
    cmd.textContent = text.slice(0, ++i);
    if (i < text.length) return setTimeout(tick, 70);
    line = (line + 1) % lines.length;
    i = 0;
    setTimeout(tick, 2200);
  };
  setTimeout(tick, 400);
}

// Reveal-on-scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}
