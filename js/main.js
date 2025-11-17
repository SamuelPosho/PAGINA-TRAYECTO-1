document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Lógica para el menú principal del sitio
  // ==========================================================================
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('nav-open');
      const isNavOpen = document.documentElement.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', isNavOpen);
    });
    mainNav.addEventListener('click', (event) => {
      if (event.target.tagName === 'A' && document.documentElement.classList.contains('nav-open')) {
        document.documentElement.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // ==========================================================================
  // Lógica para tarjetas expandibles
  // ==========================================================================
  const featureCards = document.querySelectorAll('.caracteristica-card');
  featureCards.forEach(card => {
    card.addEventListener('click', () => {
      const isCurrentlyExpanded = card.classList.contains('is-expanded');    
      featureCards.forEach(otherCard => {
        otherCard.classList.remove('is-expanded');
      });
      if (!isCurrentlyExpanded) {
        card.classList.add('is-expanded');
      }
    });
  });
});