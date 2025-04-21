/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let animals = ['vaca','perro','gato','loro','hormiga'] 

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('Mamut')
animals.push('Periquito')

console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(3,1)
console.log(animals)
// 4. Crea un set que almacene cinco libros
let books = new Set(['Cien años de soledad','El señor de los anillos','1984','Un mundo feliz,','Orgullo y prejuicio'])

console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add('Cien años de soledad')
books.add('Lolita')
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete('Lolita')
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let monts = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre'],
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(monts.has(5))[
    console.log(monts.get(5))
]

// 9. Añade al mapa una clave con un array que almacene los meses de verano
monts.set('Verano',['Junio','Julio','Agosto'])
console.log(monts)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = [1,2,3,4]

let mySet = new Set(myArray)

console.log(mySet)

let myMap = new Map([
    [0,mySet]
])

console.log(myMap)