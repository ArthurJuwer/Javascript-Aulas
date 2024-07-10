const arrayPalavras = ["Oi", "sumido", "tudo", "bem", "Saudades"]

let result = ""
for(let palavras of arrayPalavras){
    result += palavras + " "
}
console.log(result.trim())