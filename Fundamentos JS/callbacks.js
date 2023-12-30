const nomes = ['Evaldo', 'Mari', 'Camis']

// nomes.forEach(function (nome) {
//     console.log(nome)
// })

nomes.forEach((nome) => {
    console.log(nome)
})


const outrosNomes = ['Kauê', 'Gabriel', 'Larissa']

function imprimeNome(nome) {
    console.log(nome)
}

outrosNomes.forEach(imprimeNome)