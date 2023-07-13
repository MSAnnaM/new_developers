(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const modal = document.querySelector('[data-modal]');
  const openModalBtn = document.querySelectorAll('[data-modal-open]');
  const closeModalBtn = document.querySelectorAll('[data-modal-close]');
  const menu = document.querySelector('[data-sidebar]');
  const heroBtn = document.querySelectorAll('.hero-btn');
  const additionalOpenModalBtn = document.querySelectorAll('.vege-btn-order');
  const menuOpenBtn = document.querySelector('.mobile-menu-open');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const toggleModal = () => {
    modal.classList.toggle('is-hidden');
  };

  const mobileMenuItems = document.querySelectorAll('.mobile-header-item a');

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  const closeSidebarMenu = () => {
    menu.classList.add('is-hidden');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  closeModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMobileMenu();
    bodyScrollLock.enableBodyScroll(document.body);
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  const mobileShopBtn = document.querySelector('.mobile-shop');
  mobileShopBtn.addEventListener('click', toggleModal);

  const modalCloseBtn = document.querySelector('.modal [data-modal-close]');
  modalCloseBtn.addEventListener('click', toggleModal);

  additionalOpenModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  menu
    .querySelector('[data-modal-open]')
    .addEventListener('click', toggleModal);

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      closeSidebarMenu();
    });
  });

  heroBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  menuOpenBtn.addEventListener('click', toggleMenu);
})();
