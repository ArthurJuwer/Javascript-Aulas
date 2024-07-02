// Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
// outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Digite o genero do filme: ")
let valorIngressoFilme = prompt("Qual é o valor do ingresso do filme? ")

if(generoFilme == "fantasia" && valorIngressoFilme <= 15){
    // Modifique o código do exercício 4 de escrita de código para,
    //  antes de imprimir a mensagem "Bom filme!", pergunte ao usuário,
    //   pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e
    //    imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]",
    //     trocando [LANCHINHO] pelo que o usuário colocou no input.
    let lancheEscolhido = prompt("Qual lanche você vai comprar (pipoca, chocolate, doces)")
    console.log("Bom filme! e aproveite o seu lanchinho", lancheEscolhido)
} else {
    console.log("Escolha outro filme :(")
}

