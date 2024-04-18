// #region REVIEWS //
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { renderReviews } from './render-reviews';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

const previousButton = document.querySelector('.btn-prev-review-wrapper');
const previousDivButton = document.querySelector('.btn-prev-review');
const previousSvgArrow = document.querySelector('.reviews-arrow-left');

const nextButton = document.querySelector('.review-btn-next');
const nextDivButton = document.querySelector('.btn-next-review');
const nextSvgArrow = document.querySelector('.reviews-arrow-right');

const updateButtonState = (button, divButton, svgArrow, isEnd) => {
  if (isEnd) {
    button.disabled = true;
    divButton.style.cursor = 'not-allowed';
    divButton.style.border = '1px solid #3B3B3B';
    svgArrow.style.stroke = '#3B3B3B';
  } else {
    button.disabled = false;
    divButton.style.cursor = 'pointer';
    divButton.style.border = '1px solid #FAFAFA';
    svgArrow.style.stroke = '#FAFAFA';
  }
};

const updateButtonsStateReview = swiper => {
  updateButtonState(previousButton, previousDivButton, previousSvgArrow, swiper.isBeginning);
  updateButtonState(nextButton, nextDivButton, nextSvgArrow, swiper.isEnd);
};

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
      on: {
        slideChange: updateButtonsStateReview,
      },
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

    updateButtonsStateReview(swiper3);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error while fetching reviews from server',
      position: 'bottomLeft',
    });
  }
};

export { fetchDataAndInitializeSwiper };
