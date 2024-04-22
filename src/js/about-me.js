import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';

export function aboutMeFunction() {
  new Accordion('.about-me-secondlist', {
    openOnInit: [0],
    showMultiple: true,
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

  const btnAccord = document.querySelectorAll('.about-me-btn-aboutme');

  document.querySelectorAll('.about-me-secondlist-item').forEach(item => {
    if (item.classList.contains('is-active')) {
      item.firstElementChild.style.marginBottom = '0px';
      item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
    } else {
      item.firstElementChild.style.marginBottom = '35px';
      item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
    }
  });

  btnAccord.forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.about-me-secondlist-item').forEach(item => {
        if (item.classList.contains('is-active')) {
          item.firstElementChild.style.marginBottom = '0px';
          item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
        } else {
          item.firstElementChild.style.marginBottom = '35px';
          item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
        }
      });
    })
  );
}
