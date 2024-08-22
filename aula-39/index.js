// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function minhasInformacoes(){
    console.log("Eu sou Arthur, tenho 15 anos, moro em São Lepoldo e sou estudante.")
}

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informarCaracteristicas(nome,idade,endereco,profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
}
console.log(informarCaracteristicas("Arthur", 15, "Scharlau", "Estudante"))

// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somarEntradas(num1, num2){
    const soma = num1 + num2
    return soma
}
console.log(somarEntradas(10,15))
    
//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
 
function compararEntradas(num1, num2){
    const maiorOuIgual = num1 >= num2
    return maiorOuIgual
}
console.log(compararEntradas(20,15))

//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parEntradas(num1){
    const isPar = num1 % 2 === 0
    return isPar
}
console.log(parEntradas(15))
    
//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function alterarFrase(frase){
    const fraseMaiuscula = frase.toUpperCase();
    const tamanhoFrase = fraseMaiuscula.length;
    const fraseFinal = `a frase maiuscula fica: ${fraseMaiuscula} e seu tamanho é ${tamanhoFrase}`

    return fraseFinal
}
console.log(alterarFrase("olá eu tenho 24 anos"))

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

function somarNumeros(num1,num2){
    return num1 + num2
}
function subtrairNumeros(num1,num2){
    return num1 - num2
}
function multiplicarNumeros(num1,num2){
    return num1 * num2
}
function dividirNumeros(num1,num2){
    return num1 / num2
}

const primeiroValor = Number(prompt("Digite o primeiro valor: "))
const segundoValor = Number(prompt("Digite o segundo valor: "))

console.log(`Números inseridos: ${primeiroValor} e ${segundoValor}
Soma: ${somarNumeros(primeiroValor,segundoValor)}
Diferença: ${subtrairNumeros(primeiroValor,segundoValor)}
Multiplicação: ${multiplicarNumeros(primeiroValor,segundoValor)}
Divisão: ${dividirNumeros(primeiroValor,segundoValor)}`)
