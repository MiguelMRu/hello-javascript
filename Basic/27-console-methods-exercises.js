/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/
console.time("Tiempo de ejecución 1")
// 1. Crea un función que utilice error correctamente

function error1(){
    console.error("Este es un mensaje de error: ", new Error("Ha fallado la ejecucion"))

}

error1()
// 2. Crea una función que utilice warn correctamente

function warn(){
    console.warn("Este es una advertencia")
    console.trace("Trace de la ejecucion")
}

warn()

// 3. Crea una función que utilice info correctamente

console.info("Este es un mensaje de información adicional.")

// 4. Utiliza table

let table = [
    {name: 'Miguel', age: 26},
    {name: 'Dante', age: '6 meses'},
    {name: 'Alba', age: 23},
]

console.table(table)

// 5. Utiliza group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()


// 6. Utiliza time



// 7. Valida con assert si un número es positivo

let number = -1
console.assert(number > 0, "El numero debe ser positivo")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

// 10. Utiliza clear

//console.clear()

console.timeEnd("Tiempo de ejecución 1")