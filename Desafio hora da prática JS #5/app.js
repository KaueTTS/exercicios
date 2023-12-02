let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function msgConsole() {
    console.log('clicou')
}

function msgAlert() {
    alert('Eu amo o JS')
}

function pgtPrompt() {
    let paragrafo = document.querySelector('p')
    let cidade = prompt('Me diga uma cidade do Brasil')

    paragrafo.innerHTML = `Estive em ${cidade} e lembrei de você!`
}

function somando() {
    let valor1 = parseInt(prompt('Digite um número'))
    let valor2 = parseInt(Math.random() * 100 + 1)
    let resultadoEquacao = valor1 + valor2 

    alert(`Somando ${valor1} + ${valor2} recebemos como resultado ${resultadoEquacao} `)
}
