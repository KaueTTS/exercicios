const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: [
        '11 999999965', 
        '11 988899822'
    ]
}

cliente.enderecos = [
    {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934'
    }
]

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function')
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}