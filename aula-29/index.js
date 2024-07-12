
const numeroMaquina = ~~(Math.random(1) * 100)
alert("Vamos jogar!")

let acertou = false
let tentativas = 0
while(acertou != true){
    let numeroEscolhidoPrimeiroJogador = Number(prompt("Player 2: Digite um numero sortado pela maquina entre 0 - 100"))
    tentativas++
    alert("Player 2: O número chutado foi: " + numeroEscolhidoPrimeiroJogador)


    if(numeroMaquina < numeroEscolhidoPrimeiroJogador){
        alert("Errou. O numero chutado é maior do que o numero escolhido")
    } else if(numeroMaquina > numeroEscolhidoPrimeiroJogador){
        alert("Errou. O numero chutado é menor do que o numero escolhido")
    }
    else{

        alert("Acertou \nO numero de tentativas foi: " + tentativas)
        acertou = true
    }
}



