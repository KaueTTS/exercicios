// Interação com usuário
var nome = prompt('Qual é o seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagemProg = prompt('Qual é a linguagem de programação que você mais gosta?')
let num = parseFloat(prompt("Digite um número:"))

let palavraAprovacao = idade >= 18 ? `já possuí idade o suficiente para trabalhar com ${linguagemProg}` : `ainda não possuí idade o suficiente para trabalhar com ${linguagemProg}`
alert(`Olá ${nome}, tudo bem? Você tem ${idade} anos, portanto, ${palavraAprovacao}`)

if (num > 0) {
    alert(`O ${num} é um número positivo.`);
} else if (num < 0) {
    alert(`O ${num} é um número negativo.`);
} else {
    alert(`O valor digitado é um número inválido.`);
}

// Contas
var valor1 = parseInt(Math.random() * 100) + 1
var valor2 = parseInt(Math.random() * 10)
var resultadoSoma = valor1 + valor2
var resultadoSubtrair = valor1 - valor2

console.log(`Somando ${valor1} + ${valor2} é igual a ${resultadoSoma}`)
console.log(`Subtraindo ${valor1} - ${valor2} é igual a ${resultadoSubtrair}`)

while (valor2 < 10) {
    valor2++
    console.log(`O valor 2 agora é ${valor2}`)
}

resultadoSoma = valor1 + valor2
console.log(`Agora somando ${valor1} + ${valor2} vai resultar em: ${resultadoSoma}`)