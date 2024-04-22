import { fetchDataAndInitializeSwiper } from './reviews-api';

async function initializeSwiper() {
  await fetchDataAndInitializeSwiper();
}

initializeSwiper();