//#region MOBILE
import { initializeMobile } from './js/mobile-logic';
initializeMobile();
//#endregion MOBILE

import { initalizeCover } from './js/covers';
initalizeCover();

import { changeTheSubject } from './js/header-change-of-subject';
changeTheSubject();

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

import * as workTogether from './js/work-together';

//#region backToTop
import { backToTop } from './js/back-to-top.js';
backToTop();
//#endregion backToTop
