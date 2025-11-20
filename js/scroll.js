document.addEventListener("DOMContentLoaded", () => {
const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("is-visible");
      } else {
        backToTopButton.classList.remove("is-visible");
      }
    });
    backToTopButton.addEventListener("click", (e) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
});