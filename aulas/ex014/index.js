//Condioções aninhadas

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 6)
    console.log('Tenha uma Boa madrugada!')
else if (hora >= 6 && hora < 12){
    console.log('Tenha um Bom dia!')
}
else if (hora >= 12 && hora < 18){
    console.log('Tenha uma Boa tarde!')
}
else if (hora >= 18 && hora < 24){
    console.log('Tenha uma Boa noite!')
}
else{
    console.log('Horário Inválido')
}