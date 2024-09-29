const headerHide = () => {
  let lastScroll = 0;
  const defaultOffset = 200;

  const header = document.querySelector('.header');
  console.log(header);

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hideHeader');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
      //scroll dowm
      header.classList.add('hideHeader');
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove('hideHeader');
    }

    lastScroll = scrollPosition();
  });
};

export default headerHide;
