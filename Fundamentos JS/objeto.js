const cliente = {
    nome: 'Kauê Bertaze de Oliveira',
    idade: 19,
    CPF: '44899922255',
    email: 'kaue@gmail.com.br'
}

console.log()
console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente.idade} anos.`)
console.log(`O seu CPF é o ${cliente.CPF.substring(0, 2)}x.xxx.xxx-${cliente.CPF.substring(9, 11)}`)
console.log()

/// ------------------------------------------------ ///

const chaves = ['nome', 'idade', 'CPF', 'email', 'tel']

cliente.tel = '11 999999965'

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
})