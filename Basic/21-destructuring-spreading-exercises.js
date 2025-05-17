/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno"
}


// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let [myValue1, myValue2]  = myArray

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue3, myValue4 = 0]  = myArray


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let {name, age}  = person

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: nombre, age: edad}  = person

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function() {
            console.log(`La ${this.age} persona trabaja`)
        }
    }

}

let {job: {name: jobName, exp}} = person3

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [1, 2, 3, 4]

let myArray3 = [...myArray, ...myArray2]

console.log(myArray3)

// 7. Usa propagación para crear una copia de un array

let myArray4 = [...myArray3]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person4 = {...person, ...person3}

console.log(person4)

// 9. Usa propagación para crear una copia de un objeto

let person5 = {...person4}

// 10. Combina desestructuración y propagación

let {job, walk} = person5

let person6 = {...person, job, walk}

console.log(person6)