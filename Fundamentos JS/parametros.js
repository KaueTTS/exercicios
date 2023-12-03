// parametros
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(4, 23))
console.log(soma(44.5, 134))
console.log(soma(-34, 0.23))

// parâmetros x argumentos
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
console.log("Kauê", 19)

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}
console.log(multiplica(soma(4, 23), 5))