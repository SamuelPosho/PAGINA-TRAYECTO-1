document.addEventListener("DOMContentLoaded", () => {
const backToTopButton = document.getElementById("back-to-top");

  // Función para mostrar u ocultar el botón "Volver Arriba"
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      // El botón se hace visible cuando el usuario ha bajado más de 300 píxeles.
      if (window.scrollY > 300) {
        backToTopButton.classList.add("is-visible");
      } else {
        backToTopButton.classList.remove("is-visible");
      }
    });
    // Añadimos la funcion de scroll suave al hacer clic en el botón.
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault(); // se evita el comportamiento por defecto del enlace.
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    // Opciones para el observador: la animación se dispara cuando el 10%
    // del elemento es visible.
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en el viewport, añade la clase para hacerlo visible.
          entry.target.classList.add("is-visible");
        } else {
          // Cuando el elemento sale del viewport, quita la clase para que pueda animarse de nuevo.
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    // Aplica el observador a cada elemento que deba ser animado.
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
});