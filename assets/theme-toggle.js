/* Theme toggle: toggles data-theme on <html> */
(function () {
  function getPreferredTheme() {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function updateToggleLabel() {
    var link = document.querySelector('a[href="#theme-toggle"]');
    if (!link) return;
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    link.textContent = current === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTheme(getPreferredTheme());
    updateToggleLabel();

    var link = document.querySelector('a[href="#theme-toggle"]');
    if (!link) return;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      updateToggleLabel();
    });
  });
})();
