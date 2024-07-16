// 10)
let numeroTemp = 0, numeroMedia
for(let i = 0; i < 5; i++){
    let numero = Number(prompt("Digite O "+(i+1)+ " numero: "))
    numeroTemp = numeroTemp + numero
}
numeroMedia = numeroTemp / 5
console.log(`A soma é: ${numeroTemp} e a media é: ${numeroMedia}`)

// 11)
for(let i = 1; i < 51; i++){
    if(i % 2 === 1){
        console.log(i)
    }
}

// 12)

const senhaCorreta = 12345
let continuar = true
while(continuar != false){
    const usuarioSenha = prompt("Digite uma senha para sair do laço de repetição")
    if(usuarioSenha == senhaCorreta){
        continuar = false
    }
}


