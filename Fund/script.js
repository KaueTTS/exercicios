//var
// var altura = 5
// var comprimento = 7
// area = altura * comprimento

// console.log(area)
// var area

//const
const forma = 'triângulo'
const altura = 5
const comprimento = 5
let area

if (forma === 'quadrado') {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

console.log(area)

//let
// let forma = 'retângulo'
// let altura = 5
// let comprimento = 7
// let area

// if (forma === 'retângulo') {
//     area = altura * comprimento
// } else {
//     area = (altura * comprimento) / 2
// }

// console.log(area)

/* var -> Não recomendável utilizar hoje em dia, pois ela é muito "solta" podendo causar bugs
   let -> Permite trocarmos o valor dela, porém sempre temos que declarar ela antes de utilizar
   const -> Sempre vai possuir um valor fixo, ou seja, uma vez declarado um valor nela, ela se mantém com esse valor (também é necessário declarar a const antes) */
