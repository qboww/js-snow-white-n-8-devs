import { initMobileMenuModal } from './js/01-header.js';
import { initAboutMeSection } from './js/03-about-me.js';
import { initProjectsSection } from './js/05-projects.js';
import { initFaqSection } from './js/06-faq.js';
import { initCoversSection } from './js/07-covers.js';
import { initReviewsSection } from './js/08-reviews.js';
import { initWorkTogetherSection } from './js/09-work-together.js';
import { initMobileModal } from './js/10-header-modal.js';

import { initBackToTopFeature } from './js/features/back-to-top.js';
import { initCursorFeature } from './js/features/cursor.js';

initMobileModal();
initMobileMenuModal();

initBackToTopFeature();
initCursorFeature();

initAboutMeSection();
initProjectsSection();
initFaqSection();
initCoversSection();
initReviewsSection();
initWorkTogetherSection();
