(function () {
  var STORAGE_KEY = 'theme-preference';
  var html = document.documentElement;
  var toggle = document.getElementById('dark-mode-toggle');

  function getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function reinitMermaid(theme) {
    if (!window.mermaid || typeof window.mermaid.initialize !== 'function') return;
    try {
      window.mermaid.initialize({ theme: theme === 'dark' ? 'dark' : 'forest' });
      var els = document.querySelectorAll('pre.mermaid');
      for (var i = 0; i < els.length; i++) {
        if (els[i].getAttribute('data-processed') === 'true') {
          els[i].removeAttribute('data-processed');
        }
      }
      if (els.length > 0) {
        window.mermaid.init(undefined, els);
      }
    } catch (e) {}
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    reinitMermaid(theme);
  }

  function handleToggle() {
    var current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  if (toggle) {
    toggle.addEventListener('click', handleToggle);
  }

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemChange = function () {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(getSystemPreference());
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', onSystemChange);
    } else if (mq.addListener) {
      mq.addListener(onSystemChange); // Safari < 14
    }
  }
})();
