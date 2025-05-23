/*
Clases 2 a 11 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=346
*/

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

function processGreeting(greetFunction, name) {//Obtiene la funcion por parametro y la ejecuta
    greetFunction(name)
}

function returnGreeting() {
    return greet
}


processGreeting(greet, "MoureDev")

const greet2 = returnGreeting() //guarda en una variable la funcion que retorna y despues la ejecuta
greet2("Brais Moure")

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`) //al no pasar el nombre por parametro le pones el this para hacer referencia al name del objeto
    }
   /* arrowGreeting: () => { // crea su propio contextos de this por lo que no puede hacer referencia al objeto por lo que es undefined
        console.log(`Hola, ${this.name}`)
    }*/
}

handler.greeting();
//handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)
//necesitan ";" antes porque cogen el contexto del fichero entero
//a dia de hoy no es habitual utilizar esto
(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numbers) {// al no saber cuantos parametros vas a necesitar le metes el parametros resy y te pasa un array 
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

//El spread lo que hace es desenpaquetar la array, es decir los elementos los convierte en individuales

// Closures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

//funcion que se llama si misma para realizar una tarea, se podria decir que es como un bucle, 
// se debe poner una condución para terminar la ejecucion

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)// esta parte es estatica es decir tienes siemopre el 4
console.log(sumWith(2, 3)) // al 4 guardadoe en la constante lse sumas eston numeros con utilizando la fucion suma
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks, son basicamente funciones que se ejecutan de forma parcial ya que tienen otra funcion por parametro

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})