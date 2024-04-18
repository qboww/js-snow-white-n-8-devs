import { initalizeCover } from './js/covers';
initalizeCover();
// #region REVIEWS //
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { renderReviews } from './js/render-reviews';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

const previousButton = document.querySelector('.review-btn-prev');
const previousDivButton = document.querySelector('.btn-prev-review');
const previousSvgArrow = document.querySelector('.review-arrow-prev');

const nextButton = document.querySelector('.review-btn-next');
const nextDivButton = document.querySelector('.btn-next-review');
const nextSvgArrow = document.querySelector('.review-arrow-next');

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

fetch(URL)
  .then(response => {
    if (!response.ok) {
      const showNews = document.querySelector('.show-news');

      showNews.textContent = 'No reviews found';
      showNews.style.textAlign = 'center';
      showNews.style.fontSize = '24px';
      showNews.style.color = 'rgba(250, 250, 250, 0.4)';

      throw new Error('Network response was not ok.');
    }

    return response.json();
  })
  .then(data => {
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
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev',
      },
    });

    updateButtonsStateReview(swiper3);
  })
  .catch(() => {
    iziToast.error({
      title: 'Error',
      message: 'Error while fetching reviews from server',
      position: 'bottomLeft',
    });
  });
// #endregion REVIEWS //
