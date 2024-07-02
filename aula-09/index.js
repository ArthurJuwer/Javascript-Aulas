let paisDeOrigem = prompt("Qual é o seu pais de origem? ")

switch(paisDeOrigem){
    case "Brasil": 
        console.log("brasileiro")
        break
    case "EUA":
        console.log("norte-americano")
        break
    case "Inglaterra":
        console.log("Inglês")
        break
    default:
        console.log("Nacionalidade não encontrada")
}