const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  document.body.classList.toggle('backdrop');
});
