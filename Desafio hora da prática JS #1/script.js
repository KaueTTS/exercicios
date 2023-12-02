alert('Boas Vindas ao nosso site!')

    let nome = prompt('Qual é o seu nome?')
    let idade = prompt('Qual é a sua idade?')

    if (idade >= 18) {
        alert('Pode tirar habilitação!')
    } else if (idade < 18) {
        alert('Não pode tirar habilitação')
    } else if (nome == '' || idade == '') {
        let mensagemDeErro = 'Erro! Preencha todos os campos'
        alert(`${mensagemDeErro}`)
}