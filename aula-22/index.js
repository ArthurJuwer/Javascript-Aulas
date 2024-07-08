// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
const frase = prompt("Digite uma frase: ")
frase.trim()
const arrayFrases = []
// não soube fazer 
// prompt("Digite uma frase")

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const contemAbacaxi = arrayFrutas.map((value, index)=>{
    if(value == "Abacaxi"){
        return console.log("Abacaxi esta no indice " + index + ". O tamanho do array é " + arrayFrutas.length)
    } 
})

