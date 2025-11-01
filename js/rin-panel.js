document.addEventListener('DOMContentLoaded', function() {
  const rinTab = document.getElementById('rin-tab');
  const rinPanel = document.getElementById('rin-panel');
  const rinCloseBtn = document.getElementById('rin-close');

  if (rinTab && rinPanel && rinCloseBtn) {
    rinTab.addEventListener('click', () => {
      rinPanel.classList.add('is-open');
    });

    rinCloseBtn.addEventListener('click', () => {
      rinPanel.classList.remove('is-open');
    });
  }
});