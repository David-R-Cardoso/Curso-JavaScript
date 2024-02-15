let num =[9,1,2,5,10,20,99,81726,45,82]

num.sort((a,b) => a-b)
// console.log(num)

/* for (let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} */

for(let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

console.log(`A posição do numero 10 é ${num.indexOf(10)}`)