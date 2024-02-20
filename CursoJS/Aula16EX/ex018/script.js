var num = document.querySelector('#txtn')
var val = document.querySelector('#selval')
var res = document.querySelector('#res')
var n = [] 

function add(){
    if(num.value < 1 || num.value > 100){
        alert('Número inválido ou já existente')
    } else{
        res.innerHTML = ''

        n.push(Number(num.value))

        let t = document.createElement('Option')
        t.text = num.value
        val.appendChild (t)
    }
}

function final(){
    res.innerHTML = ''

    res.innerHTML += `Temos ${n.length} números cadastrados <br>`
    res.innerHTML += `O maior valor foi ? <br>`
    res.innerHTML += `O menor valor foi ? <br>`
    res.innerHTML += `A soma é ? <br>`

    for(let c in n){
        res.innerHTML += `${n[c]}`
    }
}