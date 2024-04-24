import iziToast from 'izitoast';
import axios from 'axios';

export function initWorkTogetherSection() {
  const elms = {
    form: document.querySelector('.footer-form'),
    email: document.querySelector('.footer-email-input'),
    successLabel: document.querySelector('.success-label'),
    errorLabel: document.querySelector('.error-label'),
    comments: document.querySelector('.footer-comments-input'),
    btn: document.querySelector('.footer-send-button'),
    modalBackdrop: document.querySelector('.footer-modal-backdrop'),
    modalOverlay: document.querySelector('.footer-modal-overlay'),
  };

  const labels = {
    addError() {
      elms.successLabel.classList.add('visually-hidden');
      elms.errorLabel.classList.remove('visually-hidden');
      elms.email.classList.add('input-error');
      elms.email.classList.remove('input-success');
      elms.errorLabel.classList.add('is-open');
      elms.successLabel.classList.remove('is-open');
    },

    addSuccess() {
      elms.errorLabel.classList.add('visually-hidden');
      elms.successLabel.classList.remove('visually-hidden');
      elms.email.classList.remove('input-error');
      elms.email.classList.add('input-success');
      elms.successLabel.classList.add('is-open');
      elms.errorLabel.classList.remove('is-open');
    },

    removeBoth() {
      elms.email.classList.remove('input-success');
      elms.email.classList.remove('input-error');
      elms.successLabel.classList.remove('is-open');
      elms.errorLabel.classList.remove('is-open');

      setTimeout(() => {
        elms.successLabel.classList.add('visually-hidden');
        elms.errorLabel.classList.add('visually-hidden');
      }, 250);
    },
  };

  const modals = {
    close() {
      elms.modalOverlay.classList.remove('is-open');
      elms.modalBackdrop.classList.remove('is-open');

      setTimeout(() => {
        elms.modalBackdrop.classList.add('visually-hidden');
        elms.modalOverlay.classList.add('visually-hidden');
      }, 500);

      elms.modalOverlay.children.close_button.removeEventListener('click', modals.close);
      elms.modalBackdrop.removeEventListener('click', onBackdropClick);
      document.body.removeEventListener('keydown', onBodyPress);
    },

    open() {
      elms.modalBackdrop.classList.remove('visually-hidden');
      elms.modalOverlay.classList.remove('visually-hidden');
      elms.modalBackdrop.classList.add('is-open');
      elms.modalOverlay.classList.add('is-open');

      elms.modalOverlay.children.close_button.addEventListener('click', modals.close);
      elms.modalBackdrop.addEventListener('click', onBackdropClick);
      document.body.addEventListener('keydown', onBodyPress);
    },
  };

  const messages = {
    showError() {
      iziToast.error({
        message: 'Please fill out both fields before sending!',
        messageColor: '#fafafa',
        backgroundColor: '#e74a3b',
        theme: 'dark',
        closeOnClick: true,
        timeout: 3000,
      });
    },
    showBadRequest() {
      iziToast.error({
        message: 'Something went wrong. Please try again!',
        messageColor: '#fafafa',
        backgroundColor: '#e74a3b',
        theme: 'dark',
        closeOnClick: true,
        timeout: 3000,
      });
    },
  };

  const userSubmitData = {
    email: null,
    comments: null,
  };

  if (localStorage.hasOwnProperty('userSubmitData')) {
    const storedData = JSON.parse(localStorage.getItem('userSubmitData'));

    elms.form.elements.email.value = storedData.email;
    elms.form.elements.comments.value = storedData.comments;

    userSubmitData.email = storedData.email;
    userSubmitData.comments = storedData.comments;
  }

  const addDataToLocalStorage = () => {
    localStorage.setItem('userSubmitData', JSON.stringify(userSubmitData));
  };

  const removeDataFromLocalStorage = () => {
    localStorage.removeItem('userSubmitData');
  };

  const isValidEmail = email => {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    return pattern.test(email.trim());
  };

  const postUserData = userData => {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const ENDPOINT = '/requests';
    const body = userData;

    return axios.post(`${BASE_URL}${ENDPOINT}`, body);
  };

  const onButtonClick = () => {
    if (!isValidEmail(elms.form.elements.email.value)) {
      labels.addError();
    }
  };

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      modals.close();
    }
  };

  const onBodyPress = event => {
    if (event.key === 'Escape') {
      modals.close();
    }
  };

  const onFormSubmit = async event => {
    try {
      event.preventDefault();

      const formElm = event.currentTarget;

      if (
        formElm.elements.email.value.trim() === '' ||
        formElm.elements.comments.value.trim() === ''
      ) {
        messages.showError();

        return;
      }

      const userData = {
        email: formElm.elements.email.value.trim(),
        comment: formElm.elements.comments.value.trim(),
      };

      const response = await postUserData(userData);

      elms.modalOverlay.children.title.textContent = response.data.title;
      elms.modalOverlay.children.message.textContent = response.data.message;

      modals.open();

      labels.removeBoth();

      formElm.reset();

      removeDataFromLocalStorage();
    } catch (error) {
      console.log(error);

      messages.showBadRequest();
    }
  };

  const onEmailInput = event => {
    userSubmitData.email = event.target.value;
    addDataToLocalStorage();

    if (event.target.value.length > 27 && innerWidth <= 375) {
      event.target.value = event.target.value.slice(0, 25) + '...';
    }
    if (event.target.value.length > 19 && innerWidth > 375 && innerWidth < 1440) {
      event.target.value = event.target.value.slice(0, 17) + '...';
    }
    if (event.target.value.length > 31 && innerWidth >= 1440) {
      event.target.value = event.target.value.slice(0, 29) + '...';
    }
    if (
      !elms.errorLabel.classList.contains('visually-hidden') ||
      !elms.successLabel.classList.contains('visually-hidden')
    ) {
      if (isValidEmail(event.target.value)) {
        labels.addSuccess();
      }
      if (!isValidEmail(event.target.value)) {
        labels.addError();
      }
      if (event.target.value === '') {
        labels.removeBoth();
      }
    }
  };

  const onCommentsInput = event => {
    userSubmitData.comments = event.target.value;
    addDataToLocalStorage();

    if (event.target.value.length > 27 && innerWidth <= 375) {
      event.target.value = event.target.value.slice(0, 25) + '...';
    }
    if (event.target.value.length > 19 && innerWidth > 375 && innerWidth < 1440) {
      event.target.value = event.target.value.slice(0, 17) + '...';
    }
    if (event.target.value.length > 31 && innerWidth >= 1440) {
      event.target.value = event.target.value.slice(0, 29) + '...';
    }
  };

  elms.btn.addEventListener('click', onButtonClick);
  elms.form.addEventListener('submit', onFormSubmit);
  elms.email.addEventListener('input', onEmailInput);
  elms.comments.addEventListener('input', onCommentsInput);
}
