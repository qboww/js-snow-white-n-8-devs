import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initProjectsSection = () => {
  new Swiper('.projects-swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
      tabKeys: true,
    },

    grabCursor: true,
    spaceBetween: 50,
  });
};

export { initProjectsSection };
