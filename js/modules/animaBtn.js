export default function btnAnima() {
  const botaoAnima = document.querySelector('.btn-download')

  setInterval(() => {
    botaoAnima.classList.add('ativo')
  }, 1450)
}