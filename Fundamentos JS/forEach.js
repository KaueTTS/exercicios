const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach((nota, indice) => {
    somaDasNotas += nota
    console.log(`${indice} [${nota}]`)
})

console.log('Soma das notas: ' + somaDasNotas)
const media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}`)

// const lista = [1, 2, 3, 4, 5];
// let soma = 0;

// lista.forEach(numero => soma += numero);
// console.log(soma) //15

// OU

// lista.forEach(numero => {
//     soma += numero
// });