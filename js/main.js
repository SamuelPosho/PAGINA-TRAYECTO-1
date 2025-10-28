document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isNavOpen = document.body.classList.toggle('nav-open');
      mainNav.style.display = 'flex'; // Aseguramos que sea visible para la animación
      // Actualiza el atributo ARIA para accesibilidad
      menuToggle.setAttribute('aria-expanded', isNavOpen);
    });
    
    // Cierra el menú si se hace clic en un enlace dentro de él
    mainNav.addEventListener('click', function(event) {
      if (event.target.tagName === 'A' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});