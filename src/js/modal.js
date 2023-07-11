(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    menu: document.querySelector('[data-sidebar]'),
    additionalOpenModalBtn: document.querySelector('.vege-btn-order'),
    additionalOpenModalBtn2: document.querySelector('.hero-btn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.additionalOpenModalBtn.addEventListener('click', toggleModal);
  refs.additionalOpenModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  refs.menu
    .querySelector('[data-modal-open]')
    .addEventListener('click', toggleModal);
})();
