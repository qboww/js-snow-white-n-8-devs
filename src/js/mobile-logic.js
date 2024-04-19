export function initializeMobile() {
  const menuBox = document.querySelector('.menu-box');
  const buttonMenu = document.querySelector('.button-menu');
  const buttonClose = document.querySelector('.button-mob-menu');

  buttonMenu.addEventListener('click', function () {
    menuBox.classList.toggle('visually-hidden');
  });

  buttonClose.addEventListener('click', function () {
    menuBox.classList.toggle('visually-hidden');
  });

  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('menu-link') ||
      event.target.classList.contains('modal-order-btn')
    ) {
      menuBox.classList.add('visually-hidden');
    }
  });
}
