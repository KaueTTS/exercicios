function enviarConteudo() {
    let altura = document.querySelector('input.altura').value
    let peso = document.querySelector('input.peso').value

    let imc = peso / (altura * altura)

    let resultado = document.querySelector('h3')
    let operacaoLogica = imc < 18 ? '' : 'com '
    let msgResultado = `Seu IMC atual é de ${imc.toFixed(1)}, você se encontra ${operacaoLogica} `
    let classificacaoImc = ['abaixo do peso','peso ideal','excesso de peso','obesidade','obesidade extrema']

    if (imc < 18) {
        resultado.innerHTML = msgResultado + classificacaoImc[0]
    } else if (imc >= 18 && imc < 25) {
        resultado.innerHTML = msgResultado + classificacaoImc[1]
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = msgResultado + classificacaoImc[2]
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML = msgResultado + classificacaoImc[3]
    } else {
        resultado.innerHTML = msgResultado + classificacaoImc[4]
    }
}