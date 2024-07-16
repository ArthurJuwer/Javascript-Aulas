// 13)
const arrayNotas = []
let somaNotas = 0

for(let i = 0; i < 4; i++){
    let number = prompt("Digite a"+(i+1)+ "nota")
    arrayNotas.push(number)
    somaNotas = somaNotas + number
}
const mediaNotas = somaNotas / 4

console.log(arrayNotas)
console.log("A média é" + mediaNotas)

// 14)

const arrayPares = []
const arrayImpares = []

for(let i = 0; i < 21; i++){
    let number = Number(prompt("Digite um numero inteiro: "))

    if(number % 2 == 0){
        arrayPares.push(number)
    } else {
        arrayImpares.push(number)
    }
}

// 15)

const arrayPosicoes = [9,11,2,3,4,6,8,21,32,11]

let p1
let p2
let p3
let p4
let p5
let p6
let p7
let p8
let p9
let p10

for(let i = 0; i < 10; i++){
    arrayPosicoes
}


