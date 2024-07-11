let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// O que o código abaixo está fazendo? Qual o resultado impresso no console? 
// acumulador
// R= 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// a) O que vai ser impresso no console?
// 19,21,23,25,27,30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// não, precisaria de outro tipo de for


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// * ** *** ****
// pois o console.log() está dentro do while ou seja vai sempre adicionar e aparecer posteriormente
