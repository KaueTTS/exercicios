const nomes = ["Ana", "Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes)

// const nomesAtualizados = [...meuSet]

const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)