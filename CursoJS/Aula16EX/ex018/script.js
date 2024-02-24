var num = document.querySelector('#txtn')
var lista = document.querySelector('#selval')
var res = document.querySelector('#res')
var valores = [] 

function isNumero(x){
    if(Number(x) >= 1 && Number(x <= 100) ){
        return true
    } else{
        return false
    }
}

function isLista(x, l){
    if (l.indexOf(Number(x)) != -1){
        return true
    } else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        res.innerHTML = ''

        valores.push(Number(num.value))

        let tab = document.createElement('Option')
        tab.text = num.value
        lista.appendChild (tab)

    } else{
        alert('Número inválido ou já existente')
    }

    num.value = ''
    num.focus() // o foco fica no campo de texto 
}

function final(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        res.innerHTML =''

        res.innerHTML += `Temos ${valores.length} números cadastrados <br>`
        res.innerHTML += `O maior valor foi ${maior()} <br>`
        res.innerHTML += `O menor valor foi ${menor()} <br>`
        res.innerHTML += `A soma de todos os valores é ${soma()} <br>`
        res.innerHTML += `A média dos valores é ${med()} <br>`
    }

}

function maior(){
    var max = valores.reduce((a,b)=> Math.max(a, b))
    return max
}

function menor(){
    var min = valores.reduce((a,b)=> Math.min(a, b))
    return min
}

function med(){
    let m = soma()/valores.length
    return m
}

function soma(){
    var s = 0
        for(let c in valores){
            s += valores[c]
    }
    return (s)
}