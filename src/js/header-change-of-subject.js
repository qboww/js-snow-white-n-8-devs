export function changeTheSubject() {
  const selectEl = document.querySelector('.header-select');

  selectEl.addEventListener('change', changeTheme);

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

    if (storedTheme !== null) {
      selectEl.value = `${storedTheme.replace(new RegExp('-theme'), '')}`;
    }

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('green-theme');
    }
  }
}
