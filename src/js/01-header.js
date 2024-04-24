export function initMobileMenuModal() {
  const dropDownButton = document.querySelector('.btn-drop-down');
  const menuAnchors = document.querySelector('.list-menu-anchors');

  dropDownButton.addEventListener('click', function () {
    if (!menuAnchors.classList.contains('visually-hidden')) {
      menuAnchors.classList.remove('is-open');
      setTimeout(() => {
        menuAnchors.classList.toggle('visually-hidden');
      }, 500);
      return;
    }
    menuAnchors.classList.add('is-open');
    menuAnchors.classList.toggle('visually-hidden');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
