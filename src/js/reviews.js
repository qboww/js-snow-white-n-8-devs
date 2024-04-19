// #region REVIEWS //
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { renderReviews } from './render-reviews';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

const fetchDataAndInitializeSwiper = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    const markup = renderReviews(data);
    if (!markup) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, reviews not found.',
        position: 'bottomLeft',
      });
    }
    list.insertAdjacentHTML('beforeend', markup);

    const swiper3 = new Swiper('#swiper3', {
      direction: 'horizontal',

      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 18,
        },
      },
      navigation: {
        nextEl: '.btn-next-review',
        prevEl: '.btn-prev-review',
      },
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error while fetching reviews from server',
      position: 'bottomLeft',
    });
  }
};

export { fetchDataAndInitializeSwiper };
