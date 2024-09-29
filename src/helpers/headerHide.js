const headerHide = () => {
  let lastScroll = 0;
  //   const defaultOffset = 200;
  //breakPoint for scroll

  const header = document.querySelector('.header');

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hideHeader');

  window.addEventListener('scroll', () => {
    if (
      scrollPosition() > lastScroll &&
      !containHide()
      //     &&
      //   scrollPosition() > defaultOffset
    ) {
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
