export default function animaScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  const distanceAnima = window.innerHeight * 0.7;

  if(sections.length) {
    function animaAoScroll() {
      sections.forEach((section) => {
        const sectionTop =  section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - distanceAnima) < 0
        if(sectionVisible) {
          section.classList.add('ativo')
        }
      })
    }
    
    window.addEventListener('scroll', animaAoScroll)
    animaAoScroll()
  }
}
