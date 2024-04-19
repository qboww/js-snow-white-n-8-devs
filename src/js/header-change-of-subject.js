export function changeTheSubject() {
  let selectEl = document.querySelector('.header-select');

  selectEl.addEventListener('change', changeTheme);

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function changeTheme(event) {
    const selectedTheme = event.currentTarget.value;
    setTheme(`${selectedTheme}-theme`);
  }

  (function () {
    const storedTheme = localStorage.getItem('theme');
    selectEl.value = `${storedTheme.replace(new RegExp('-theme'), '')}`;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('red-theme');
    }
  })();
}
