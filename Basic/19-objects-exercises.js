/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno"
}

// 2. Accede y muestra su valor

console.log(person.name)
console.log(person.age)
console.log(person.alias)
// 3. Agrega una nueva propiedad

person.hijo = "Dante"
console.log(person.hijo)

// 4. Elimina una de las 3 primeras propiedades

delete person.age
console.log(person)

// 5. Agrega una función e invócala

person.work = function() {
    console.log(`${this.name} está quemado de su trabajo`)
}
console.log(person.work())


// 6. Itera las propiedades del objeto

for(let key in person){
    console.log(person[key])
}

// 7. Crea un objeto anidado

person.novia = {
    name: "Alba",
    age: 23,
    work: "Graphic designer"
}


// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person.novia)
console.log(person)


// 9. Comprueba si los dos objetos creados son iguales

//No lo aon

// 10. Comprueba si dos propiedades diferentes son iguales

//lo he creado dentro de la misma, pero se puede