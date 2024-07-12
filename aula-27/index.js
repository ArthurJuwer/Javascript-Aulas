// Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
const numeroEscolhidoPrimeiroJogador = Number(prompt("Player 1: Digite a escolha de um numero: "))
// Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
console.log("Vamos jogar!")

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. 
// A cada chute, deve ser informado no console:
let acertou = false
let tentativas = 0
while(acertou != true){
    let numeroChuteSegundoJogador = Number(prompt("Player 2: Chute um numero: "))
    tentativas++
    console.log("O número chutado foi: " + numeroChuteSegundoJogador)

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: 
// `Errou. O número escolhido é maior/menor`

    if(numeroChuteSegundoJogador < numeroEscolhidoPrimeiroJogador){
        console.log("Errou. O numero chutado é menor do que o numero escolhido")
    } else if(numeroChuteSegundoJogador > numeroEscolhidoPrimeiroJogador){
        console.log("Errou. O numero chutado é maior do que o numero escolhido")
    }
    else{
        // c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador,
        //  deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
        console.log("Acertou \nO numero de tentativas foi: " + tentativas)
        acertou = true
    }
}



