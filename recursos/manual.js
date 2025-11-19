document.addEventListener('DOMContentLoaded', () => {
  const ejemploMenu = document.getElementById('ejemplo-menu-funcional');
  if (ejemploMenu) {
    const toggleButton = ejemploMenu.querySelector('.ejemplo-menu-toggle');

    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        ejemploMenu.classList.toggle('is-open');
      });
    }
  }
});