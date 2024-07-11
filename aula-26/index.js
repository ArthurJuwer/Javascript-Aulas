// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') 
// que é composto somente de números. Baseando-se nisso, crie um código para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [10,25,30,45,50,65,70,85,90,100]

//     a) Escreva um programa que **imprime** cada um dos valores do array original.
console.log("Array original: ")
for(let itensArray of arrayOriginal){
    console.log(itensArray)
}
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
console.log("Array original divido por 10: ")
for(let itensArrayDividoPor10 of arrayOriginal){
    console.log(itensArrayDividoPor10 / 10)
}
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
console.log("Array original somente pares: ")
const arrayOriginalPares = []
for(let itensPares of arrayOriginal){
    if(itensPares % 2 == 0){
        arrayOriginalPares.push(itensPares)
    }
}
for(let mostrarPares of arrayOriginalPares){
    console.log(mostrarPares)
}
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
const arrayString = ["Arthur", "Juwer", "Rambo"]
for(let indice = 0; indice < arrayString.length; indice++){
    console.log(`O elemento do index ${indice} é: ${arrayString[indice]}`)
}
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0]

for(let maior of arrayOriginal){
    if(maior > maiorNumero){
        maiorNumero = maior
    }
}
for(let menor of arrayOriginal){
    if(menor < menorNumero){
        menorNumero = menor
    }
}
console.log("O maior numero é: "+ maiorNumero)
console.log("O menor numero é: "+ menorNumero)