import { initalizeCover } from './js/covers';
initalizeCover();

//#region HEADER
import { initializeMenuBehavior } from './js/header-logic';
initializeMenuBehavior();
//#endregion HEADER

//#region REVIEWS
import { fetchDataAndInitializeSwiper } from './js/reviews';

async function initializeSwiper() {
  await fetchDataAndInitializeSwiper();
}

initializeSwiper();
//#endregion REVIEWS

//#region MOBILE
import { initializeMobile } from './js/mobile-logic';

initializeMobile();
//#endregion MOBILE

//#region backToTop
import { backToTop } from './js/back-to-top.js';
backToTop();

initializeMobile();
//#endregion backToTop
