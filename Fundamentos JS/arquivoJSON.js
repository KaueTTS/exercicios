const dados = require('./arquivo.json')

console.log(dados)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados)

console.log()
console.log(clienteEmString)
console.log(typeof clienteEmString)

const objCliente = JSON.parse(clienteEmString)

console.log()
console.log(objCliente)
console.log(typeof objCliente)