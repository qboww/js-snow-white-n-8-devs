import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initFaqSection() {
  new Accordion('.faq-list', {
    showMultiple: true,
  });
}
