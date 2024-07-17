// 13)
const arrayNotas = []
let somaNotas = 0

for(let i = 0; i < 4; i++){
    let number = Number(prompt("Digite a"+(i+1)+ "nota"))
    arrayNotas.push(number)
    somaNotas = somaNotas + number
}
const mediaNotas = somaNotas / 4

console.log(arrayNotas)
console.log("A média é " + mediaNotas)

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
console.log("Os numeros Pares são: " + arrayPares)
console.log("Os numeros Impares são: " + arrayImpares)

// 15)

const arrayPosicoes = [9,11,2,3,4,6,8,21,32,10]

const arrayOrganizado = arrayPosicoes.sort() 

console.log(arrayOrganizado)


