/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a= 0, b= 0){
    return a + b
}

console.log(sum(67455,4533))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numbers = [6, 3, 7, 8, 9]
let bigger = 0

numbers.forEach((element) => {
    if(element > bigger){
        bigger = element
    }    
});

console.log(bigger)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocals(string = ""){
    let vocals = new Set(['a','e','i','o','u' ])
    let contador = 0


    for(let valor of string.toLowerCase()){
       if(vocals.has(valor)){
            contador++
       }

    }

    return contador

}

console.log(vocals("HolA, Me llamo Miguel Mateos Ruiz"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings = ["Hola", "Adios"]
let newString = ""

strings.forEach((element) => {
    newString += element.toUpperCase()

})

console.log(newString)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primo(number){
    for(let i= 2; i < number; i++){
        if(number%i == 0){
            return false 
        }
    }
    return true
}

console.log(primo(22))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function communs(array1, array2){
    let communsArray = []

    for(let valor of array1){
        if(array2.includes(valor)){
            communsArray.push(valor)
        }
    }
    return communsArray
}

let array1 = [1,2,3,4]

let array2 = [4]

console.log(communs(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

numbers.forEach((element) => {console.log(element**2)})

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado