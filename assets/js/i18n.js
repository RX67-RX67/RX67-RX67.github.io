// Simple EN / Mandarin toggle.
// Content is duplicated in the markup with data-i18n="en" / data-i18n="zh"
// wrappers; CSS shows/hides based on document.documentElement[data-lang].
(function () {
  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
      var next = current === 'en' ? 'zh' : 'en';
      applyLang(next);
      try { localStorage.setItem('site-lang', next); } catch (e) {}
    });
  });
})();
