import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';

export function aboutMeFunction() {
  const accordionAboutMe = new Accordion('.about-me-secondlist', {
    showMultiple: true,
  });
  accordionAboutMe.open(0);

  new Swiper('.about-me-thirdpart', {
    centeredSlides: true,
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
    slidesPerView: 2,
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
