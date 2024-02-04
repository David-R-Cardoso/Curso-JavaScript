function Verificar(){   
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (Fano.value.length == 0 || Fano.value > ano){
        alert('[ERRO} Verifique os dados e tente novamente')
    } else{
        var Fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)

        var genero =''
        if (Fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10){
                //bebê
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else{
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //bebê
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`

        res.appendChild(img)
    }
}