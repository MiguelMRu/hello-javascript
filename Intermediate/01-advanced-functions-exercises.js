/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function returnedFunction(){
    console.log('Hola me llamo Miguel')
}

function returnFunction(returnedFunction){
    return returnedFunction()
}

returnFunction(returnedFunction)

// 2. Implementa una función currificada que multiplique 3 números

function multiply(...numbers) {
    let result = 1
    for (let number of numbers) {
        result *= number
    }
    return result
}

function curryMultiply(a) {
    return function (b) {
        return function (c) {
                return multiply(a, b, c)
        }
    }
}

const multiplier = curryMultiply(2)(3)(4)
console.log(multiplier)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

//necesito el numero y el exponente(las veces que hay que multiplicar el numero)
//despues tengo que utilizar el numero y multiplicarlo por si mismo las veces que me venga en el explonente
// paso por paso seria 2^3= 2*2*2 = 2*2= 4 , 4*2 = 8
//por lo que lo que se va multiplicando hay que guardese el resultado


function potencia(n, e){
    if (e == 0){
        return 1
    }
    return n * potencia(n, e-1)

}

console.log(potencia(2,3))

// 4. Crea una función createCounter() que reciba un valor inicial 
// y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(n){
      return {
        increment: function(){
            n++
        },
        decremnt: function(){
            n--
        },
        getValue: function(){
            console.log(n)
        }
    }
}

const counter = createCounter(5)

counter.decremnt()
counter.decremnt()
counter.getValue()
counter.increment()
counter.getValue()


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) 
// y luego multiplique el resultado por multiplier




// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico