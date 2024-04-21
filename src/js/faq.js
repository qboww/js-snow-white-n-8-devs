import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function buttonFaq() {
    

    const accordionFaq = new Accordion('.faq-list', {
        showMultiple: true,
    });
    accordionFaq.open();
}