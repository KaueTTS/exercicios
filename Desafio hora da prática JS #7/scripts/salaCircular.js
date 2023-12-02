function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  

let titulo = document.querySelector('h3')

function enviarConteudo() {
  let raio = document.querySelector('input.raio').value

  let area = Math.PI * raio * raio
  let perimetro = 2 * Math.PI * raio

  let resultado = `Área da sala circular: ${area.toFixed(2)} metro quadrados <br> Perímetro da sala circular: ${perimetro.toFixed(2)} metros`

  titulo.innerHTML = resultado
}