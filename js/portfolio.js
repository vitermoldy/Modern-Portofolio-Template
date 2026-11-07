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

  // mark the nav link of the section on screen: the one crossing the middle of the viewport
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  if ('IntersectionObserver' in window && targets.every(Boolean)) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = links[targets.indexOf(entry.target)];
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        } else if (link.getAttribute('aria-current') === 'true') {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
