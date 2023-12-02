// let x = ''
// console.log(x)
// x = 'oi'

// Três formas de escrever funções

// Declaração de função
function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto(soma())
// imprimeTexto('Outro texto')

function soma() {
    return 2 + 2
}

// console.log(soma())

// Arredonda para o valor mais próximo
Math.round(4.3) // retorna 4
Math.round(3.85) // retorna 4
Math.round(2.5) // retorna 3

// Arredonda para o valor mais alto
Math.ceil(5.2) // retorna 6

// Arredonda para o valor mais baixo
Math.floor(5.6) // retorna 5

// Desconsidera os número decimais
Math.trunc(4.3) // retorna 4 
Math.trunc(4.7) // retorna 4

// Retorna a raiz quadrada de um número
Math.sqrt(64) // 8

// Retorna o maior valor
Math.max(0, 50, -209, 150) // retorna 150

// Retorna o menor valor
Math.min(4, 47, 200, -34, -132) // retorna -132

// Retorna um valor aleatório entre 0 e 1
Math.random()