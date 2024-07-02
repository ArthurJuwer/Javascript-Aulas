// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turnoAluno = prompt("Qual turno Você estuda [M], [V], [N]")
let turnoEscolhido

if(turnoAluno == "M"){
    turnoAluno = "Bom Dia!"
} else if(turnoAluno == "V"){
    turnoAluno = "Bom Tarde!"
} else if(turnoAluno == "N"){
    turnoAluno = "Boa Noite!"
}
console.log(turnoAluno)

switch (turno) {
    case "M":
            console.log("bom dia!")       
        break;
        case "V":
            console.log("boa tarde!")
       
        break;
        case "M":
            console.log("boa noite!")       
        break;
}

