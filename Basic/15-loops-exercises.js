/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
/*
for(let i = 1; i<=20;i++){
    console.log(i)
}
*/
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// Dos formas de hacerlo comprobando si el resto entre 2 == 0 o decirle que continue si el resto es distinto de 0
/*
for(let i = 1; i<=50;i++){
    if(i%2 == 0){
        console.log(i)
    }
}
*/
/*
for(let i = 1; i<=50;i++){
    if(i%2 != 0){
        continue
    }
    console.log(i)
}
*/
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/*
let myArray = ['Miguel', 'Mateos', 'Ruiz']
let mySet = new Set(['Miguel', 'Mateos', 'Ruiz',25,true])

let myMap = new Map([
    ['name','Miguel'],
    ['email', 'miguelmateosruiz@gmail.com'],
    ['age',25]
])

for(let valor of myArray){
    console.log(valor)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocals = new Set(['a','e','i','o','u'])

let myString = 'Hola me llAmo Miguel'

let contador = 0

let lowerCasseString = myString.toLowerCase()

for(let valor of lowerCasseString){
    if(vocals.has(valor)){
        contador++
    }
}

console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let number of numbers){
    number = number * 2
    console.log(number)
}

*/
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/*
let i = 1

while(i <= 10){
    
    console.log(i *5)
    i++
}
*/
// 8. Usa un bucle para invertir una cadena de texto


let myString = 'Hola me llAmo Miguel'

let lowerCasseString = myString.toLowerCase()

let invertedString =''

for (let i= myString.length; i >= 0; i--)[
    invertedString += lowerCasseString.charAt(i)
]

console.log(invertedString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

//necesito un indice para ir iterando y una variable para guardar el valor antes de iterar
let i= 0
let j = 1
let temp 
// 0 + 1 = 1 // 1+1= 2 // 1 + 2 = 3 // 2+ 3 = 5

while(i <= 55){
    console.log(i)
    temp = i
    i = j
    j = temp + j

}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10


let numbers = [100,2,36,4,56,6,7,8,9,10]

for(let number of numbers){
    if(number > 10){
        console.log(number)
    }
}
