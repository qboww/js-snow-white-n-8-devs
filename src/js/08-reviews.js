import { fetchDataAndInitializeSwiper } from './helpers/reviews-api';

export function initReviewsSection() {
  async function initializeSwiper() {
    await fetchDataAndInitializeSwiper();
  }

  initializeSwiper();
}
