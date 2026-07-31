(function () {
  var trigger = document.getElementById('hero-photo-trigger');
  var lightbox = document.getElementById('lightbox');
  var closeBtn = document.getElementById('lightbox-close');
  if (!trigger || !lightbox || !closeBtn) return;

  function open() {
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    trigger.focus();
  }

  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });

  closeBtn.addEventListener('click', close);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
  });
})();
