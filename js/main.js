(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var heroVideo = document.getElementById('heroVideo');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroVideo && !reducedMotion) {
    window.addEventListener('load', function () {
      heroVideo.src = heroVideo.dataset.src;
      var playing = heroVideo.play();
      if (playing && playing.catch) { playing.catch(function () {}); }
    });
  }
})();
