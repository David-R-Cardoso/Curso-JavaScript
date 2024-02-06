function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0){
        alert('Por favor, digiete um número!')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''

       /*  let c =1
        while (c <= 10){
            let item = document.createElement('option')
            tab.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } */

        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}