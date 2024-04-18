export function initializeMenuBehavior() {
  const dropDownButton = document.querySelector('.btn-drop-down');
  const menuAnchors = document.querySelector('.menu-anchors');

  dropDownButton.addEventListener('click', function () {
    menuAnchors.classList.toggle('visually-hidden');
  });
}
