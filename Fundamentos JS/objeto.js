const cliente = {
    nome: 'Kauê Bertaze de Oliveira',
    idade: 19,
    CPF: '44899922255',
    email: 'kaue@gmail.com.br'
}

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente.idade} anos.`)
console.log(`O seu CPF é o ${cliente.CPF.substring(0, 2)}x.xxx.xxx-${cliente.CPF.substring(9, 11)}`)