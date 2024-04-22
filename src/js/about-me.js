import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';

export function aboutMeFunction() {
  new Accordion('.about-me-secondlist', {
    openOnInit: [0],
  });

  new Swiper('.about-me-swiper-container', {
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    touch: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });
}
