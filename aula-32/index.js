// Strings

// 7) 

const nomeUsuario = prompt("Digite o nome do usuario: ")
const senhaUsuario = prompt("Digite a senha do usuario: ")

const nomeUsuarioParaMinusculo = nomeUsuario.toLowerCase()
const senhaUsuarioParaMinusculo = senhaUsuario.toLowerCase()

console.log(`Em minusculo o nome do usuario é: ${nomeUsuarioParaMinusculo} e a senha fica: ${senhaUsuarioParaMinusculo}`)

// 8)

const frase = prompt("Digite uma frase: ")

const frase_vogais_A_trocadas_X = frase.replace("a", "x")
const frase_vogais_AO_trocadas_X = frase_vogais_A_trocadas_X.replace("o", "x") 

console.log("As vogais A e O da frase: "+ frase +" trocadas por X ficam: " + frase_vogais_AO_trocadas_X)

// 9)

const emailUsuario = prompt("Digite o email do usuario: ")

const emailUsuarioSemEspaço = emailUsuario.trim()

console.log("O email do usuario sem espaço fica: " + emailUsuarioSemEspaço)