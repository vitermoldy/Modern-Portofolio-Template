// Theme toggle and the footer year. The kit's own scripts (assets/) run the nav, hovers and loops.
(function () {
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var button = document.querySelector('[data-theme-toggle]');

  function apply(theme) {
    root.dataset.theme = theme;
    if (meta) meta.setAttribute('content', theme === 'light' ? '#eff0f1' : '#18191b');
    if (button) {
      var next = theme === 'light' ? 'dark' : 'light';
      button.setAttribute('aria-pressed', String(theme === 'light'));
      button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      var label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = next === 'light' ? 'Light theme' : 'Dark theme';
    }
  }

  apply(root.dataset.theme === 'light' ? 'light' : 'dark');

  if (button) {
    button.addEventListener('click', function () {
      var theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      apply(theme);
      // private browsing can refuse storage; the theme still changes for this visit
      try { localStorage.setItem('theme', theme); } catch (e) {}
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
