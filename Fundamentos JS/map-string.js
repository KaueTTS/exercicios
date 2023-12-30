const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesPadronizados = nomes.map((nome) => {
    return nome.toLowerCase() // ou toUpperCase()
})

console.log(nomesPadronizados)