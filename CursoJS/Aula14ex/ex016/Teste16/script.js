var ini = document.querySelector('#txtini')
var fim = document.querySelector('#txtfim')
var pas = document.querySelector('#txtpas')
var res = document.querySelector('#res')

function contar(){
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML ='Impossivel contar!'
    } else {
        res.innerHTML = 'Contando... <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f){
            for (let c = i; c <= f; c+=p){
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}