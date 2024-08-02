function calcularArea(altura, largura){
    const area = altura * largura
    return area
};
const areaTotal = calcularArea(2,3)

console.log(areaTotal)
console.log(calcularArea(2,3))

// exercicio 3
// -> crie uma funcao que receba dois numeros e retonre a soma entre eles, 
// -> guarde o retorno dessa funcao em uma variavel e imprima no console

function somarNumeros(num1,num2){
    return num1 + num2
}
const somaFinalizada = somarNumeros(4,5)

console.log(somaFinalizada)

somarNumeros(somarNumeros(1,2),5)

// exercicio 4 

const array = [1,2,3,4,5]

function receberArray(array){
    const novoArray = []
    novoArray.push(array[0]/2,array[1]/2)
    return novoArray
}
console.log(receberArray(array))