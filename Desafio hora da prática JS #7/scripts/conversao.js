let cotacaoDolar = 4.80;

function enviarConteudo() {
    let valorEmDolar = document.querySelector('input.dolar').value
    let titulo = document.querySelector('h3')

    function converterDolarParaReal() {
        let valorEmReais = valorEmDolar * cotacaoDolar
        return valorEmReais.toFixed(2)
    }

    let resultado = converterDolarParaReal()
    let msgResultado = `$${valorEmDolar} equivale a R$${resultado}`
    
    titulo.innerHTML = msgResultado
}