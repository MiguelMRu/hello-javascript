/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/
import {add, PI, Circle} from "./28-export-modules.js"
// 1. Exporta una función

export function sum(a, b) {
    return a + b
}


// 2. Exporta una constante

export const NAME = "Miguel"

// 3. Exporta una clase

export class person {
    constructor(name, age, surname){
        this.name = name
        this.age = age
        this.surname = surname
    }
}

// 4. Importa una función

add(4,5)


// 5. Importa una constante

console.log(PI)

// 6. Importa una clase

let circle = new Circle(10)
console.log(circle.radius)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)


export default function substract(a, b) {
    return a - b
}


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior