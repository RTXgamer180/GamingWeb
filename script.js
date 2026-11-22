const nav = document.querySelector('#nav');
const menuToggle = document.querySelector('#menuToggle');
const themeButton = document.querySelector('#themeButton');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeButton.textContent = document.body.classList.contains('light') ? '☾' : '☼';
});

document.querySelector('#year').textContent = new Date().getFullYear();
