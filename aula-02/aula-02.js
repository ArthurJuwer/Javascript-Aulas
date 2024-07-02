// OPERADORES

let n1 = 10
let n2 = "10"

let result = n1 == n2
// true
result = n1 === n2
//false

// OPERADORES LOGICOS 

{
    // operador E {&&}
    let isAdult = true
    let hasTicket = true
    let canEnter = isAdult && hasTicket
    console.log(canEnter) // true
}
{
    // operador OU {||}
    let isWeekend = true
    let isHoliday = false
    let canRelax = isWeekend || isHoliday
    console.log(canRelax) // true
}
{
    // operador NEGAÇÃO {!}
    let isRaining = false
    let shouldFakeUmbrella = !isRaining
    console.log(shouldFakeUmbrella) // true

}

