var ini = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var pas = document.getElementById('txtpas')
var res = document.querySelector('#res')

function Contar(){
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = '<u><strong style="color: red;">Impossivel contar!'

    } else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0){
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449} `
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}