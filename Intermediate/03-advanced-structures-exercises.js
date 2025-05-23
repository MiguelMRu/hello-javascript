/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

let numbers = [7,3,1,12,44,12,54]

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let mapEjem = numbers.map(element => element +20)
console.log(mapEjem)

let filterEjem = numbers.filter(element => element < 10)
console.log(filterEjem)

let reduceEjem = numbers.reduce((result, current) => result * current,1)
console.log(reduceEjem)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let cubo = numbers.map(element => element ** 3).filter(element => element % 2 === 0)
console.log(cubo)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let flats = ["Hola", ["Me llamo", ["Miguel Mateos", ["Ruiz"]]]]

let flat = flats.flat(3)


console.log(flat.flatMap(words => words.toLowerCase()))



// 4. Ordena un array de números de mayor a menor

let sorted = numbers.sort((a, b) => a - b) 
console.log(sorted)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])

const union = new Set([...setA,...setB])
console.log(union)

let interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)

let diferencia = new Set([...setB].filter(element => !setA.has(element)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior

interseccion.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let myMap = new Map()

myMap.set(1, {
    name: 'Miguel',
    surname: 'Mateos Ruiz',
    age: 26,
    email: 'miguelmateosruiz@gmail.com'
})

myMap.set(2, {
    name: 'Dante',
    surname: 'Tejedor Mateos',
    age: 0,
    email: 'dantetejedormateos@gmail.com'
})

myMap.forEach((value, key) => console.log(`Valor: ${value} key: ${key}`))

// 8. Dado el mapa anterior, crea un array con los nombres

let names = [myMap.get(1)]
console.log(names)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario