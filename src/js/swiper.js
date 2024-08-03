// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  //   direction: 'vertical',

  loop: true,

  //   autoHeight: true,

  speed: 1000,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  //   navigation: {
  //     hideOnClick: true,

  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     dynamicBullets: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + '</span>';
  //     },

  //     // //*______________________________________________fraction
  //     // type: 'fraction',
  //     // renderFraction: function (currentClass, totalClass) {
  //     //   return (
  //     //     'Photo <span class="' +
  //     //     currentClass +
  //     //     '"></span>' +
  //     //     ' from ' +
  //     //     '<span class="' +
  //     //     totalClass +
  //     //     '"></span>'
  //     //   );
  //     // },
  //     ////*________________________________________________progressbar
  //     // type: 'progressbar',
  //     //*______________________________________________paginations________________
  //   },

  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     draggable: true,
  //   },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  //   slidesPerView: 1.5,
  // centeredSlides: true,
  // slidesPerGroup: 2.5,

  spaceBetween: 0,

  initialSlide: 0,

  //   freeMode: true,

  //*#region Effect

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  //   effect: 'flip',
  //   flipEffect: {
  //     slideShadows: true,
  //     limitRotation: true,
  //   },

  //   effect: 'cube',
  //   cubeEffect: {
  //     slideShadows: false,
  //     shadow: true,
  //     shadowOffset: 40,
  //     shadowScale: 0.95,
  //   },

  //   effect: 'coverflow', //*___+slidesPerView___
  //   coverflowEffect: {
  //     slideShadows: true,
  //     rotate: 60,
  //     stretch: 50,
  //   },

  //   #endregion

  //   breakpoints: {
  //     320: { slidesPerView: 1 },
  //     480: { slidesPerView: 2 },
  //     992: { slidesPerView: 3 },
  //   },
  //   zoom: {
  //     maxRatio: 5,
  //     minRatio: 1,
  //   },
});
