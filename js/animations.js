document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  if (!elementsToAnimate.length) return;
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});