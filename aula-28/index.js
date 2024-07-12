
const numeroEscolhidoPrimeiroJogador = Number(prompt("Player 1: Digite a escolha de um numero de (1-100): "))
console.log("Vamos jogar!")

let acertou = false
let tentativas = 0
while(acertou != true){
    let numeroChuteMaquina = ~~(Math.random(1) * 100)
    tentativas++
    console.log("Player 2: O número chutado foi: " + numeroChuteMaquina)


    if(numeroChuteMaquina < numeroEscolhidoPrimeiroJogador){
        console.log("Errou. O numero chutado é menor do que o numero escolhido")
    } else if(numeroChuteMaquina > numeroEscolhidoPrimeiroJogador){
        console.log("Errou. O numero chutado é maior do que o numero escolhido")
    }
    else{

        console.log("Acertou \nO numero de tentativas foi: " + tentativas)
        acertou = true
    }
}



