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
    },
]

cliente.enderecos.push({
    rua: 'R. Joseph Ladder',
    numero: 404,
    apartamento: false
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)