const pokemon = ["bulbassauro", "squirtle", "charmander"]
console.log("Tem " + pokemon.length + " Pokemons") // 3

const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]

seriesBoas.includes("Breaking Bad") // true
seriesBoas.includes("Game of Thrones") // false

const numeros = [1,2,3]
numeros.push(4)
// adiciona na ultima opção
console.log(numeros) // [1,2,3,4]

numeros.push(5,6,7)
console.log(numeros) // [1,2,3,4,5,6,7]

const listaFrutas = ["Maça", "Banana", "Morango"]

 // 3
console.log("O tamanho antigo é "+ listaFrutas.length)

listaFrutas.push("Abacaxi")

 // 4
console.log("O novo tamanho é "+ listaFrutas.length)

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()
// remove do ultimo index
console.log(meusPeixes)

