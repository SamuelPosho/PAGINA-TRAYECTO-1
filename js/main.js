document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const themeToggle = document.getElementById('theme-toggle');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      // Alterna la clase en el body para mostrar/ocultar el menú
      document.body.classList.toggle('nav-open');
      
      // Actualiza el atributo ARIA para accesibilidad
      const isNavOpen = document.body.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', isNavOpen);
    });
    
    // Cierra el menú si se hace clic en un enlace dentro de él (mejora la UX en móvil)
    mainNav.addEventListener('click', function(event) {
      if (event.target.tagName === 'A' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Lógica para el modo oscuro
  if (themeToggle) {
    // 1. Comprobar si hay una preferencia guardada en localStorage
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }

    // 2. Escuchar el clic en el botón
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      // 3. Guardar la preferencia en localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    });
  }
});