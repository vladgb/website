document.getElementById('year').textContent = new Date().getFullYear();
const clock = document.getElementById('clock');
const tick = () => { clock.textContent = 'cluj · ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Bucharest' }); };
tick(); setInterval(tick, 30000);
// highlight current tmux window
const links = [...document.querySelectorAll('.tmux__wins a')];
const secs = links.map(a => document.querySelector(a.getAttribute('href')));
addEventListener('scroll', () => {
  let i = 0; secs.forEach((s, k) => { if (s && s.getBoundingClientRect().top < 120) i = k; });
  links.forEach((a, k) => { a.classList.toggle('active', k === i); a.textContent = a.textContent.replace('*', '') + (k === i ? '*' : ''); });
}, { passive: true });
  