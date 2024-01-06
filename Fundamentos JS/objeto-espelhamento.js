const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: [
        '11 999999965', 
        '11 988899822'
    ],
}

cliente.enderecos = [
    {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934',
    },
]

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)

// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
//    }
   
//    const equipoGuerreiro = {
//     espada: "Andúril",
//     capa: "capa élfica +2"
//    }

//    const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
//    console.log(guerreiro)

