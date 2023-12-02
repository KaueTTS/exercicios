function enviarConteudo() {
    let numero = document.querySelector('input.numero').value
    let titulo = document.querySelector('h3')

    function calcularFatorial() {
        if (numero < 0) {
            numero = ''
        } else {            
            let fatorial = 1
    
            for (let i = 2; i <= numero; i++) {
                fatorial *= i
            }
    
            return fatorial
        }
    }

    let resultado = calcularFatorial()
    let msgResultado = numero === '' ? `Não é possível realizar o cálculo` : `O fatorial do número ${numero} é ${resultado}`

    titulo.innerHTML = msgResultado
}