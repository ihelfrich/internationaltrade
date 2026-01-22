(function () {
  var elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window) || elements.length === 0) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(function (el) { observer.observe(el); });
})();
