//para este exercicio, comece criando um array com os valores 1,2,3,4,5 e 6
const numeros = [1,2,3,4,5,6]

console.log(numeros)
// determine o tamanho do array
console.log("O tamanho do array é " + numeros.length)
// adicione o valor 7
numeros.push(7)
// remova os numeros 4 e 5
numeros.splice(3,2)
// determine o novo tamanho
console.log("O novo tamanho do array é " + numeros.length)
console.log("Agora ele ficou " + numeros)