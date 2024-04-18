import { initalizeCover } from './js/covers';
initalizeCover();

//#region HEADER
import { initializeMenuBehavior } from './js/header-logic';

initializeMenuBehavior();
//#endregion HEADER

//#region REVIEWS
import { fetchDataAndInitializeSwiper } from './js/reviews';

await fetchDataAndInitializeSwiper();
//#endregion REVIEWS