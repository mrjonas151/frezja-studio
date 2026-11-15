const studio = {
  phone: '554391682002',
  message: 'Olá, Frezja Studio! Conheci o trabalho de vocês pelo site e tenho interesse em agendar um horário. Poderiam, por gentileza, informar os serviços e horários disponíveis? Agradeço a atenção.'
};
const bookingUrl = `https://wa.me/${studio.phone}?text=${encodeURIComponent(studio.message)}`;
document.querySelectorAll('[data-book]').forEach(link => {
  link.href = bookingUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('#mobile-menu');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => { menu.showModal(); toggle.setAttribute('aria-expanded', 'true'); });
document.querySelector('.menu-close').addEventListener('click', () => menu.close());
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.close()));
menu.addEventListener('close', () => toggle.setAttribute('aria-expanded', 'false'));
const photograph = document.querySelector('.work-dialog');
document.querySelector('.view-work').addEventListener('click', () => photograph.showModal());
document.querySelector('.work-close').addEventListener('click', () => photograph.close());
photograph.addEventListener('click', event => { if (event.target === photograph) { const r = photograph.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) photograph.close(); } });
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion');
}
