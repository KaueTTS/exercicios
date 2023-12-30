const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for (let nota of notas) {
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length

// console.log(`A média das notas é ${media}`)

// const lista = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let elemento of lista) {
//  soma += elemento;
// }

// console.log(soma) //15