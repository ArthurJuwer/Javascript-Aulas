// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 


const quantidadeBichinhos = prompt("Quantos bichinhos você tem?")

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if(quantidadeBichinhos == 0){
    console.log("Que pena! Você pode adotar um pet!")
} else {

    //     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    const arrayBichinhos = []
    for(let i = 0; i < quantidadeBichinhos; i++){
        const nomeBichinhos = prompt("Digite o nome do " + (i+1) +"°")
        arrayBichinhos.push(nomeBichinhos)
    }
//     c) Por fim, imprima o array com os nomes dos bichinhos no console
    console.log("Os nomes dos seus bichinhos são: ")
    for(let nomeTodos of arrayBichinhos){
        console.log(nomeTodos)
    }
}



    
    
