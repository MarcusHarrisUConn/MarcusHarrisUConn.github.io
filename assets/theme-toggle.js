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

  function labelFor(theme) {
    return theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  function updateButton(btn) {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    btn.textContent = labelFor(current);
    btn.setAttribute('aria-pressed', current === 'dark' ? 'true' : 'false');
    btn.classList.toggle('is-dark', current === 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTheme(getPreferredTheme());

    var link = document.querySelector('a[href="#theme-toggle"]');
    if (!link) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle-btn';
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      updateButton(btn);
    });

    link.replaceWith(btn);
    updateButton(btn);
  });
})();
