// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(o), ${nomeDoUsuario}`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
//     seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//     Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

let comidasFavoritas = ["Arroz", "Frango", "Whey", "Creopioca", "Banana"]

console.log("O array completo é: " + comidasFavoritas)

console.log(`Essas sao as minhas comidas preferidas: 
·${comidasFavoritas[0]}\n·${comidasFavoritas[1]}\n·${comidasFavoritas[2]}\n·${comidasFavoritas[3]}\n·${comidasFavoritas[4]}`)

const comidaFavoritaDoUsuario = prompt("Digite a sua comida favorita")
comidasFavoritas[1] = comidaFavoritaDoUsuario

console.log("A nova lista ficou: "+ comidasFavoritas)

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console

let listaDeTarefas = []

const tarefasUsuario1 = prompt("Digite a primeira tarefa: ")
const tarefasUsuario2 = prompt("Digite a segunda tarefa: ")
const tarefasUsuario3 = prompt("Digite a terceira tarefa: ")

listaDeTarefas.push(tarefasUsuario1,tarefasUsuario2, tarefasUsuario3)

console.log(listaDeTarefas)

const tarefaRealizada = prompt("Digite qual tarefa você ja realizou: [0,1,2]")

listaDeTarefas.splice(tarefaRealizada, 1)

console.log("O lista final ficou: ", listaDeTarefas)