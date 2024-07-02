const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele realiza uma verificação para saber se o numero que o usuario digitar é estritamente par, ou seja seu resto da divisão é par

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Todos os numeros par

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// TOdos os numeros difernetes de par ou seja IMPAR {ex: 1,3,5,7,9}, numeros que terminam com os do exemplo

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// para mostrar o valor da fruta da fruta digitada

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maça é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Apareceria a mensagem O preço da fruta Pera é R$ 5

const numero1 = Number(prompt("Digite o primeiro número."))

if(numero1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Está fazendo um bloco de pergunta

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o numero for 10 irá aparecer no console ("Esse número passou no teste") (Essa mensagem é secreta!!!), 
// e se for -10 irá dar um erro de escopo


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// a varivel mensagem foi criada dentro do escopo
