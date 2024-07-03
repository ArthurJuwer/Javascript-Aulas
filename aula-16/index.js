const nome = "Vitor Hugo"

console.log("O tamanho de caracteres" + nome.length)

const frase = "NovaFrase"

const fraseMinuscula = frase.toLowerCase()

const fraseMaiscula = frase.toUpperCase()

console.log(`Normal = ${frase} \nminuscula = ${fraseMinuscula}\nMaiscula = ${fraseMaiscula}`)

const email = "           mika@gmail.com"

console.log(email.trim())

const alimento = "Batata doce"

console.log(alimento.includes("salgada"))
console.log(alimento.includes("batata"))


const fraseInteira = "Comi um prato de cenoura"
console.log(fraseInteira)

const novaFraseInteira = fraseInteira.replaceAll("cenoura", "maçã")
console.log(novaFraseInteira)

// peça para o usuario escrever uma frase e imprima no console a frase alterado, com: 

// TODAS AS LETRAS MAISCULAS
// NA LINGUAS DO i (substituindo a vogal "o" por "i")
// O tamanho da frase:

let fraseUsuario = prompt("digite uma frase: ")

console.log(fraseUsuario.toUpperCase())
console.log(fraseUsuario.replaceAll("o", "i"))
console.log(fraseUsuario.length)
