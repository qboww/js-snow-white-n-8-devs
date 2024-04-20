import iziToast from 'izitoast';
import axios from 'axios';

const elms = {
  form: document.querySelector('.footer-form'),
  email: document.querySelector('.footer-email-input'),
  successLabel: document.querySelector('.success-label'),
  errorLabel: document.querySelector('.error-label'),
  comments: document.querySelector('.footer-comments-input'),
  btn: document.querySelector('.footer-send-button'),
};

const labels = {
  addSuccess() {
    elms.errorLabel.classList.add('visually-hidden');
    elms.successLabel.classList.remove('visually-hidden');
    elms.email.classList.remove('input-error');
    elms.email.classList.add('input-success');
  },

  addError() {
    elms.errorLabel.classList.remove('visually-hidden');
    elms.successLabel.classList.add('visually-hidden');
    elms.email.classList.add('input-error');
    elms.email.classList.remove('input-success');
  },
  removeBoth() {
    elms.successLabel.classList.add('visually-hidden');
    elms.errorLabel.classList.add('visually-hidden');
    elms.email.classList.remove('input-success');
    elms.email.classList.remove('input-error');
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

const onFormSubmit = async event => {
  try {
    event.preventDefault();

    if (
      event.currentTarget.elements.email.value.trim() === '' ||
      event.currentTarget.elements.comments.value.trim() === ''
    ) {
      messages.showError();

      return;
    }

    const userData = {
      email: event.currentTarget.elements.email.value.trim(),
      comment: event.currentTarget.elements.comments.value.trim(),
    };

    const response = await postUserData(userData);
  } catch (error) {
    console.log(error);

    messages.showBadRequest();
  }
};

const onEmailInput = event => {
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
