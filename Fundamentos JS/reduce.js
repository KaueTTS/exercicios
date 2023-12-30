const salaJS = [5, 8, 9, 7, 3, 10, 4, 10]
const salaJava = [6, 10, 3, 5, 7, 5]
const salaPython = [10, 10, 6, 8]

function calcMedia(notasSala) {
    const somaDasNotas = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota
    }, 0)

    console.log(somaDasNotas)

    const media = somaDasNotas / notasSala.length

    return media
}

console.log(`A média da sala de JS é ${calcMedia(salaJS)}`)
console.log(`A média da sala de JAVA é ${calcMedia(salaJava)}`)
console.log(`A média da sala de PY é ${calcMedia(salaPython)}`)

// const numeros = [43, 50, 65, 12]

// const soma = numeros.reduce((acc, atual) => atual + acc, 0)

// console.log(soma) //170