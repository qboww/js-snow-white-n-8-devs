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

    Array.from(selectEl.options).forEach(option => {
      if (option.value === selectedTheme) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }

  function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);

      Array.from(selectEl.options).forEach(option => {
        if (option.value === storedTheme.replace('-theme', '')) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    } else {
      setTheme('red-theme');
    }
  }

  applyStoredTheme();

  document.body.classList.add('theme-loaded');
}
