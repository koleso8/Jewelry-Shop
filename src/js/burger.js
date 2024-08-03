const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});
