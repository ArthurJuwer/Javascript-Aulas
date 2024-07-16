// Sequencial 

// 1)
const arrayNumeros = []
for(let i = 0; i < 3; i++){
    let numero = Number(prompt("Digite o " + (i+1) +" numero: "))
    arrayNumeros.push(numero)
}
let soma = (arrayNumeros[0] + arrayNumeros[1] + arrayNumeros[2]) / arrayNumeros.length

console.log(soma)

// 2)

const alturaPaciente = Number(prompt("Digite sua Altura"))

const pesoIdeal = (72.7 * alturaPaciente) - 58

console.log("Seu peso ideal é: " + pesoIdeal + " kg")

// 3)

const salarioHora = prompt("Digite quanto você ganha por hora: ")
const quantidadeHoraMes = prompt("Digite quantas horas você trabalha no mês: ")

const salarioTotalFinalMes = salarioHora * quantidadeHoraMes

console.log("Seu salario final no mês sera: " + salarioTotalFinalMes)



