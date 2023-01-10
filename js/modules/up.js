export default function up() {
  const btnUp = document.querySelector('[data-up="up"]');
  const headerTop = document.querySelector('.main');

  function upToTop() {
    headerTop.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  btnUp.addEventListener('click', upToTop);
}
