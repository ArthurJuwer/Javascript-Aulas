// 1.) CRIE UM OBJETO QUE REPRESENTE VOCE

const meuPerfil = {
    nome: "Arthur Juwer Rambo",
    idade: 15,
    genero: 'M',
    comidasFavoritas: ["Arroz", "Frango", "Whey"],
    irParaAcademia: function() {
        return "Você foi para a o2!"
    },
    programarNaEscola: function (){
        return "Você esta programando </>"
    }
}

// 2. Acesse e imprima no console cada uma das propriedades do exercicio 1. escolha a notacao que prefir


console.log(`olá eu me chamo ${meuPerfil.nome} e tenho ${meuPerfil.idade} anos. 
    meu sexo é ${meuPerfil.genero}, minhas comidas favoritas são ${meuPerfil.comidasFavoritas}
    e os hobbies são ${meuPerfil.irParaAcademia()}`)


// 3. crie um objeto que represente um filme

const filme = {
    diretor: "James Cameron",
    nome: "Titanic",
    anoLancamento: "13/04/2013",
    elenco: [ "Leonardo DiCaprio", "Kate Winslet" , "Billy Zane"]
}


console.log(`O filme ${filme.nome} foi dirigido por ${filme['diretor']} com seu elenco ${filme['elenco']}. e foi relançado em ${filme.anoLancamento}`)

// 4. objeto que represente uma pessoa  

const pessoa = {
    nome: "Joao",
    idade: 12,
    generoMusical: "funk",
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

// 5. adicione ao objeto do exercio 1 uma lista com os nomes dos personagens do filme

const listaPersonagensEx = ["Personagem 1", "Personagem 2", "Personagem 3"];

meuPerfil.listaPersonagens = listaPersonagensEx

console.log(meuPerfil.listaPersonagens[0] + "->" + filme.elenco[0])
console.log(meuPerfil.listaPersonagens[1] + "->" + filme.elenco[1])
console.log(meuPerfil.listaPersonagens[2] + "->" + filme.elenco[2])

filme.elenco[0] = 'Xuxa';

console.log(meuPerfil)

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
