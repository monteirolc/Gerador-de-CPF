import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'
;(function () {
  const gera = new GeraCPF()
  const cpfGerado = document.querySelector('.cpf-gerado')
  const novo = gera.geraNovoCpf()
  cpfGerado.innerHTML = novo
})()
