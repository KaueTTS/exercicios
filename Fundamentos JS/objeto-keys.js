const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: [
        '11 999999965', 
        '11 988899822'
    ]
}

// cliente.enderecos = [
//     {
//         rua: 'R. Joseph Climber',
//         numero: 1337,
//         apartamento: true,
//         complemento: 'ap 934'
//     }
// ]

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('enderecos')) {
    console.error('Erro. É necessário ter um endereço cadastrado!')
}