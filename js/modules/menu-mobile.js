export default function menuMobile() {
  const btn = document.getElementById('btn-mobile')
  const itensMenu = document.querySelectorAll('.navbar a')

  if (itensMenu.length) {
    function showMenu() {
      const nav = document.getElementById('nav')
      nav.classList.toggle('ativo')
    }
  
    btn.addEventListener('click', showMenu)
    itensMenu.forEach((item) => {
      item.addEventListener('click', showMenu)
    })
  }
}