/* =========================================================
   Ma Game — accent preview toggle (TEMPORARY decision tool)
   Lets you compare the web purple (#7C6AFF) vs iOS orange (#FF5533)
   live across all pages. Persists choice in localStorage.

   To REMOVE after the brand colour is decided:
   1) delete this file,
   2) remove the <script src="theme-preview.js"> tags from the pages,
   3) optionally hard-set the winning values in style.css :root
      (and drop the html[data-accent="orange"] block).
   ========================================================= */
(function () {
  var KEY = 'magame_accent';
  var OPTIONS = [
    { id: 'purple', color: '#7C6AFF', label: 'Web' },
    { id: 'orange', color: '#FF5533', label: 'iOS' }
  ];

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function apply(id) {
    if (id === 'orange') document.documentElement.setAttribute('data-accent', 'orange');
    else document.documentElement.removeAttribute('data-accent');
    try { localStorage.setItem(KEY, id); } catch (e) {}
    var btns = document.querySelectorAll('.accent-preview button');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-accent-id') === id;
      btns[i].classList.toggle('on', on);
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  // apply ASAP to limit flash
  var current = saved() === 'orange' ? 'orange' : 'purple';
  apply(current);

  function injectStyles() {
    if (document.getElementById('accent-preview-style')) return;
    var css =
      '.accent-preview{position:fixed;left:18px;bottom:18px;z-index:90;' +
      'display:flex;align-items:center;gap:9px;padding:8px 12px;border-radius:999px;' +
      'background:rgba(20,16,28,0.7);border:1px solid rgba(255,255,255,0.12);' +
      'backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);' +
      'box-shadow:0 10px 30px rgba(0,0,0,0.4);font-family:inherit;}' +
      '.accent-preview .cap{font-size:.66rem;font-weight:700;letter-spacing:.08em;' +
      'text-transform:uppercase;color:#8E8AA6;}' +
      '.accent-preview button{width:26px;height:26px;border-radius:50%;cursor:pointer;' +
      'border:2px solid transparent;padding:0;position:relative;transition:transform .15s ease;}' +
      '.accent-preview button:hover{transform:scale(1.12);}' +
      '.accent-preview button.on{border-color:#fff;box-shadow:0 0 0 2px rgba(0,0,0,0.4);}' +
      '.accent-preview button .tip{position:absolute;bottom:130%;left:50%;transform:translateX(-50%);' +
      'font-size:.62rem;color:#cfcadf;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;}' +
      '.accent-preview button.on .tip{opacity:1;}' +
      '@media (max-width:520px){.accent-preview .cap{display:none;}}';
    var s = document.createElement('style');
    s.id = 'accent-preview-style';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function injectUI() {
    if (document.querySelector('.accent-preview')) return;
    injectStyles();
    var box = document.createElement('div');
    box.className = 'accent-preview';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'Accent colour preview');
    var cap = document.createElement('span');
    cap.className = 'cap';
    cap.textContent = 'Accent';
    box.appendChild(cap);
    OPTIONS.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-accent-id', o.id);
      b.style.background = o.color;
      b.setAttribute('aria-label', o.label + ' (' + o.color + ')');
      b.innerHTML = '<span class="tip">' + o.label + ' · ' + o.color + '</span>';
      b.addEventListener('click', function () { apply(o.id); });
      box.appendChild(b);
    });
    document.body.appendChild(box);
    apply(saved() === 'orange' ? 'orange' : 'purple');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectUI);
  else injectUI();
})();
