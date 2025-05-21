/*
Clases 13 a 22 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4355
*/

// Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map
//aplica una funciona  cada uno de los elementos la que nos de la gana en este caso multiplica pro dos todos los numeros
//retorna un nuevo array con el resultado de la funcion

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter
//filtra por el criterio que le has dado

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce
//lo reduce todo a un unco valor con la funcion que le pongas, en este caso suma todos los numeros
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

// - Manipulación

// flat
// sirve para cuqando tienes arrays dentro de otros le pones la cantidad de arrays que les quieres quitar y te lo "aplana"
let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap
//combinacion de flat y map es decir hjace una funcion por cada elemento de un array y te lo aplana devolviendolo en un nuevo array
//en este caso por cada elemento del array le hace un split que es el criterio del flat y te devuelde un nuevo array con cada palabra
let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - Ordenación

// sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [ 3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b) // al restarlo sabe que numero es menor de todos con el resultado de la operacion

console.log(sorted)

// reverse
// le da la vuelta al array, OJO muta el array original
sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find
// busca el primer elemtno que cumple una condicion
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex
//igual que el anterior pero te devuelve la posicion en vez del elemento

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

// Eliminación de duplicados
//utiliza el set para eliminar los duplicados de un array
let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])//al utilizar spread operator los une en uno nuevo
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))// el set a lo convierte en un array y utiliza el filter para comprobar
//  si lo tienes el set b
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// - Conversión

// Set a Array

console.log([...setA])

// - Iteración

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)