// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)
// a. undefined
array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// f. 9

// 2. Leia o código abaixo com atenção
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27 




