// escopo global
const a = 1

function impremeVariavel(){
    // escopo local
    const b = 2
    console.log("variavel a " + a)
    console.log("variavel b "+ b)
}

impremeVariavel()

console.log("variavel a " + a)
console.log("variavel b" + b) // erro pois a variavel foi criada no escopo da função e nao no global