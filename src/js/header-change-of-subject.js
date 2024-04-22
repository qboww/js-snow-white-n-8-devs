export function changeTheSubject() {
  const selectEls = document.querySelectorAll('.header-select');

  selectEls.forEach(selectEl => {
    selectEl.addEventListener('change', changeTheme);
  });

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function changeTheme(event) {
    const selectedTheme = event.currentTarget.value;
    setTheme(`${selectedTheme}-theme`);
  }

  document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

  function getLocalStorageTheme() {
    const storedTheme = localStorage.getItem('theme');

    selectEls.forEach(selectEl => {
      if (storedTheme !== null) {
        selectEl.value = `${storedTheme.replace(new RegExp('-theme'), '')}`;
      }

      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme('green-theme');
      }
    });
  }
}

changeTheSubject();
