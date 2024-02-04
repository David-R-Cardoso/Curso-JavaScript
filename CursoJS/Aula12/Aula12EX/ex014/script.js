function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    // hora = 
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src ="fotomanha.png"
        document.body.style.backgroundColor = '#FFD795'
        msg.innerHTML +=' Bom dia!'
    } else if(hora >= 12 && hora <= 18){
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "#784854"
        msg.innerHTML += ' Boa tarde!'
    } else{
        img.src = "fotonoite.png"
        document.body.style.backgroundColor ="#0D2E37"
        msg.innerHTML += ' Boa Noite!'
    }

}