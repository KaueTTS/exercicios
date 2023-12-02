function startTime() {
    var hoje = new Date();

    // Ano
    var ano = hoje.getFullYear()
    
    // Horário
    var horas = hoje.getHours()
    var minutos = hoje.getMinutes()
    var segundos = hoje.getSeconds()
    
    minutos = checkTime(minutos)
    segundos = checkTime(segundos)

    console.log(`Ano: ${ano}`)
    console.log(`Horário: ${horas}:${minutos}:${segundos}`)
}

function checkTime(i) {
    if (i < 10) {
        i="0" + 1
    }
    return i
}

startTime()
