(() => {
  const refs = {
    openMenuBtn: document.querySelector('[mobile-modal-open]'),
    closeMenuBtn: document.querySelector('[mobile-modal-close]'),
    menu: document.querySelector('[mobile-modal]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
