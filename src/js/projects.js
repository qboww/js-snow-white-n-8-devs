import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectsFunction = () => {
  new Swiper('.projects-swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.projects-next-button',
      prevEl: '.projects-previous-button',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
      tabKeys: true,
    },

    grabCursor: true,
  });
};

export { projectsFunction };
