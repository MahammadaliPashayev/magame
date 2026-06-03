/* =========================================================
   Ma Game — shared i18n engine (RU / AZ / EN)
   Each page defines window.I18N = { ru:{...}, az:{...}, en:{...} }
   before loading this script.
   - [data-i18n]       -> element.innerHTML = dict[key]
   - [data-i18n-tags]  -> fills with <span> per array item
   - meta.title / meta.desc -> <title> and meta description
   Detects language from saved choice, then navigator.languages.
   ========================================================= */
(function () {
  var SUPPORTED = ['ru', 'az', 'en'];
  var FALLBACK = 'en';
  var KEY = 'magame_lang';

  if (!window.I18N) return;

  function detect() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var code = (langs[i] || '').slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return FALLBACK;
  }

  function apply(lang) {
    var d = window.I18N[lang] || window.I18N[FALLBACK];
    if (!d) return;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (d[k] != null) nodes[i].innerHTML = d[k];
    }
    var tagEls = document.querySelectorAll('[data-i18n-tags]');
    for (var j = 0; j < tagEls.length; j++) {
      var arr = d[tagEls[j].getAttribute('data-i18n-tags')];
      if (arr && arr.length) {
        var html = '';
        for (var t = 0; t < arr.length; t++) html += '<span>' + arr[t] + '</span>';
        tagEls[j].innerHTML = html;
      }
    }
    if (d['meta.title']) document.title = d['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md && d['meta.desc']) md.setAttribute('content', d['meta.desc']);

    var btns = document.querySelectorAll('.lang-switch button');
    for (var b = 0; b < btns.length; b++) {
      var on = btns[b].getAttribute('data-lang') === lang;
      btns[b].classList.toggle('is-active', on);
      btns[b].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}

    // let pages react to language changes (re-render dynamic widgets)
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: lang, dict: d } }));
  }

  // expose current language helpers for page scripts
  window.MaGameI18N = {
    current: function () {
      try { var s = localStorage.getItem(KEY); if (s && SUPPORTED.indexOf(s) !== -1) return s; } catch (e) {}
      return detect();
    },
    apply: apply,
    t: function (key) {
      var d = window.I18N[window.MaGameI18N.current()] || window.I18N[FALLBACK] || {};
      return d[key];
    }
  };

  var current = detect();
  function run() { apply(current); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else { run(); }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.lang-switch button') : null;
    if (!btn) return;
    var lang = btn.getAttribute('data-lang');
    if (SUPPORTED.indexOf(lang) !== -1) apply(lang);
  });
})();
