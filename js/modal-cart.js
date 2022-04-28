(() => {
  const openModalBtn = document.querySelector('[data-modal-cart-open]');
  const closeModalBtn = document.querySelector('[data-modal-cart-close]');
  const modal = document.querySelector('[data-modal-cart]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();
