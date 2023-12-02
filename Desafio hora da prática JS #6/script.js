let paragrafo = document.querySelector('p')
let titulo = document.querySelector('h3')
let valor1 = parseInt(Math.random() * 100 + 1)
let valor2 = parseInt(Math.random() * 100 + 1)

paragrafo.innerHTML = `Os números gerados foram ${valor1} e ${valor2}`

// Boas Vindas
function enviar() {
    let nome = document.querySelector('input').value

    titulo.innerHTML = `Olá, ${nome}! Vamos praticar JS?`
}

// Dobrar um número aleatório
function dobrarNumero() {
    function dobrando(valor) {
        let dobrar = valor * 2
        return dobrar
    }

    paragrafo.innerHTML = `O dobro do número ${valor1} é ${dobrando(valor1)} <br> E o dobro do número ${valor2} é ${dobrando(valor2)}`

    // Faz parte do manual
    // return numero * 2;
}

// Manual - Chamar sempre que atualiza a pg
// let resultadoDobro = dobrarNumero(10)
// console.log(`O dobro de 10 é ${resultadoDobro}`)

// Calculo de média manual
function calcularMedia(matematica, portugues, ingles) {
    return (matematica + portugues + ingles) / 3
}

let media = parseInt(calcularMedia(8, 8, 10))
console.log(media)

// Veririficar o número maior e menor
function maxNumero() {
    let resultadoMaior = valor1 > valor2 ? valor1 : valor2
    let resultadoMenor = valor1 < valor2 ? valor1 : valor2

    paragrafo.innerHTML = `Entre os valores ${valor1} e ${valor2}, <br> o maior é o ${resultadoMaior} e o menor é o ${resultadoMenor}`
}

// Multiplicado o número por ele mesmo
function multiplicarNumero() {
    function resultado(valor) {
        let multiplicando = valor * valor
        return multiplicando
    }

    paragrafo.innerHTML = `${valor1} x ${valor1} = ${resultado(valor1)} <br> 
    ${valor2} x ${valor2} =  ${resultado(valor2)} <br>
    ${valor1} x ${valor2} =  ${resultado(valor2)}`
}