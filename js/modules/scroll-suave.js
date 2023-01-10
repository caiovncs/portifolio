export default function scrollSuave() {
  const elementsMenu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function getScrollTop(element) {
    const idElement = element.getAttribute('href');
    return document.querySelector(idElement).offsetTop;
  }

  function scrollToSection(event) {
    event.preventDefault();
    const to = getScrollTop(event.target);

    window.scroll({
      top: to - 72,
      behavior: 'smooth',
    });
  }

  elementsMenu.forEach((element) => {
    element.addEventListener('click', scrollToSection);
  });
}
