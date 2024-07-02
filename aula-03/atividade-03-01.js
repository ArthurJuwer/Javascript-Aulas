let idade = 19
let brasileiro = true

if(idade >= 18){
    console.log("é maior de idade")
} 

if(brasileiro == true){
    console.log("é brasileiro")
}

if(idade >= 18 && brasileiro == true){
    console.log("Pode votar!!!")
}

idade >= 18 ? console.log("é maior") : console.log("Não pode")
