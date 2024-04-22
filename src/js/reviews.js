import { fetchDataAndInitializeSwiper } from './reviews-api';

export function initalizeReviews() {
  async function initializeSwiper() {
    await fetchDataAndInitializeSwiper();
  }

  initializeSwiper();
}
