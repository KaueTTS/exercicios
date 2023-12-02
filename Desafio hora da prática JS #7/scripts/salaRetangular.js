let titulo = document.querySelector('h3')

function enviarConteudo() {
  let altura = document.querySelector('input.altura').value
  let largura = document.querySelector('input.largura').value

  let area = altura * largura
  let perimetro = 2 * (altura + largura)

  let resultado = `Área da sala retangular: ${area.toFixed(2)} metros quadrados <br> Perímetro da sala retangular ${perimetro.toFixed(2)} metros`

  titulo.innerHTML = resultado
}