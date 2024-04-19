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
