export function changeTheSubject() {
  document.querySelector('.header-select').addEventListener('change', changeTheme);

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

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('red-theme');
    }
  })();
}
