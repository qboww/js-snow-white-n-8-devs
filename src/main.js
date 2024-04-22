import { initializeMobile } from './js/mobile-logic';
initializeMobile();

import { initalizeCover } from './js/covers';
initalizeCover();

import { initializeMenuBehavior } from './js/header-logic';
initializeMenuBehavior();

import * as workTogether from './js/work-together';

import { backToTop } from './js/back-to-top.js';
backToTop();

import { aboutMeFunction } from './js/about-me.js';
aboutMeFunction();

import { initalizeReviews } from './js/reviews.js';
initalizeReviews();

import { projectsFunction } from './js/projects.js';
projectsFunction();

import { buttonFaq } from './js/faq.js';
buttonFaq();

import './js/cursor.js';

// const btnAccord = document.querySelectorAll('.about-me-btn-aboutme');

// document.querySelectorAll('.about-me-secondlist-item').forEach(item => {
//   if (item.classList.contains('is-active')) {
//     item.firstElementChild.style.marginBottom = '0px';
//     item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
//   } else {
//     item.firstElementChild.style.marginBottom = '35px';
//     item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
//   }
// });

// btnAccord.forEach(btn =>
//   btn.addEventListener('click', () => {
//     document.querySelectorAll('.about-me-secondlist-item').forEach(item => {
//       if (item.classList.contains('is-active')) {
//         item.firstElementChild.style.marginBottom = '0px';
//         item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
//       } else {
//         item.firstElementChild.style.marginBottom = '35px';
//         item.firstElementChild.style.transition = 'margin 0.5s ease-in-out';
//       }
//     });
//   })
// );
