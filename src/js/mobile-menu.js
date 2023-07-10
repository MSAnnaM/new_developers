(() => {
  const refs = {
    openMenuBtn: document.querySelector('[mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[mobile-menu-close]'),
    menu: document.querySelector('[mobile-modal]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
