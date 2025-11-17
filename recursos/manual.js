document.addEventListener('DOMContentLoaded', () => {
  // Lógica aislada para el menú de hamburguesa de ejemplo en el manual
  const menuContainer = document.getElementById('ejemplo-menu-funcional');
  if (menuContainer) {
    const toggleButton = menuContainer.querySelector('.ejemplo-menu-toggle');
    const nav = menuContainer.querySelector('.ejemplo-menu-nav');

    if (toggleButton && nav) {
      toggleButton.addEventListener('click', () => {
        // Añade o quita la clase 'is-open' al contenedor del menú de ejemplo
        menuContainer.classList.toggle('is-open');
      });
    }
  }
});