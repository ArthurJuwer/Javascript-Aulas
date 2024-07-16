// Estrutura Condicionais: 

// 4)
const personagem_pontos_vida = prompt("Digite os pontos de vida do seu Personagem: ")
const personagem_pontos_ataque_recebidos = prompt("Digite os pontos de ataque que seu Personagem recebeu: ")

const personagem_pontos_vida_restantes = personagem_pontos_vida - personagem_pontos_ataque_recebidos 
if(personagem_pontos_vida_restantes <= 0){
    console.log("Personagem Derrotado")
} else {
    console.log("A vida restante do personagem é "+ personagem_pontos_vida_restantes)
}
// 5)

const notasAluno = []
for(let i = 0; i < 2; i++){
    let nota = prompt("Digite sua nota " + i+":")
    notasAluno.push(nota)
}
const notaFinal = (notasAluno[0] + notasAluno[1]) / 2

if(notaFinal == 10){
    console.log("Aprovado com Distinção")
} else if(notaFinal >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// 6)

const arrayMenores = []
for(let i = 0; i < 3; i++){
    let numero = prompt("Digite o "+(i+1) + " numero: ");
    arrayMenores.push(numero)
}
let menor = 0
let maior = 0

for(let i = 0; i < 3; i++){
    if(arrayMenores[i] > maior){
        maior = arrayMenores[i]
    }
    if(arrayMenores[i] < menor){
        maior = arrayMenores[i]
    }
}


