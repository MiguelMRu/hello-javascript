/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = 'Miguel'

if(myName == 'Miguel'){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'Miguel'
let password = 123

if(user == 'Miguel' && password == 123 ){
    console.log('Acceso autorizado')
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number =1

if(number > 0){
    console.log('positivo')
}else if(number < 0){
    console.log('negativo')
}else{
    console.log(0)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 23

if(edad < 18){
    edad = 18 -edad  
    console.log('Eres menor de edad te faltan ' + edad + ' años' )
}else{
    'eres mayor de edad'
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const adulto = edad >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(adulto)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 'AbRil'
let estacion


switch (month.toLowerCase()) {
    case 'enero' || 'febrero' || 'marzo':
        estacion = 'Invierno'
    break

    case 'abril' || 'mayo' || 'junio':
        estacion = 'Primavera'
    break

    case 'julio' || 'agosto' || 'septiembre':
        estacion = 'Verano'
    break

    case 'octubre' || 'noviembre' || 'diciembre':
        estacion = 'Verano'
    break

    default:
        estacion = 'Mes no valido'
}

console.log(estacion)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias

switch (month.toLowerCase()) {
    case 'enero' || 'mayo' || 'marzo' || 'julio' || 'agosto' || 'octubre' || 'diciembre':
        dias = 31
    break

    case 'abril' || 'junio' ||'septiembre'  || 'noviembre':
        dias = 30
    break

    case 'febrero':
        dias = 28 

    default:
        dias = 'Mes no valido'
}

console.log(dias)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7