// 1.) CRIE UM OBJETO QUE REPRESENTE VOCE

const meuPerfil = {
    nome: "Arthur Juwer Rambo",
    idade: 15,
    genero: 'M',
    comidasFavoritas: ["Arroz", "Frango", "Whey"],
    irParaAcademia: function() {
        console.log("Você foi para a o2!")
    },
    programarNaEscola: function (){
        console.log("Você esta programando </>")
    }
}

// 2. Acesse e imprima no console cada uma das propriedades do exercicio 1. escolha a notacao que prefir


console.log(`
    olá eu me chamo ${meuPerfil.nome} e tenho ${meuPerfil.idade} anos. 
    meu sexo é ${meuPerfil.genero}, minhas comidas favoritas são ${meuPerfil.comidasFavoritas}
    e os hobbies são ${meuPerfil.irParaAcademia}`)


const professor = [
    {nome: "Andrei", ano: 1},
    {nome: "Vitor", ano: 2},
    {nome: "Guilherme", ano: 3}
]

const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
console.log(curso.linguagens[1])
console.log(curso['linguagens'][1])
