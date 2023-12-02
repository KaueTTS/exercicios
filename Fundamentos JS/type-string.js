// Tipo string
const text1 = 'Olá, mundo'
const text2 = "Olá, mundo"
const stringNums = '12324'

// Concatenação (+)
const nome = 'Kauê'
const citacao = 'Meu nome é '

/*
console.log(citacao + nome)
*/

// Caracteres de escape (Código unicode)
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

/*
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
*/

// Métodos de string nativos do js
const cidade = 'são paulo'
const input = 'São Paulo'
console.log(cidade === input) // False

const inputMinusculo = input.toLowerCase()
console.log(cidade === inputMinusculo) // True

const senha = 'Senha432!'
console.log(senha.length) // 9 caracteres