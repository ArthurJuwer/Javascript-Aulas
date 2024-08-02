// Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

const b = Number(prompt("Digite o valor B"))
const c = Number(prompt("Digite o valor C"))

function realizarTeoremaPitagoras(b,c){
    const a = b**2 + c**2
    const resultado = Math.sqrt(a)
    return resultado
}
console.log("O valor da hipotenusa de b=" + b + " e c=" + c + " = " + realizarTeoremaPitagoras(b,c))