export function initializeMenuBehavior() {
  const dropDownButton = document.querySelector('.btn-drop-down');
  const menuAnchors = document.querySelector('.list-menu-anchors');

  dropDownButton.addEventListener('click', function () {
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
