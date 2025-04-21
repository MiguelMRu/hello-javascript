/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

        
    }

    walk(){
        console.log(`${this.name} de edad ${this.age} está andando` )
    }

    static jump(){
        console.log(`${this.name} salta` ) 
    }
}

let person = new Person("Miguel",26)

console.log(person.name)
console.log(person.age)
person.walk()
Person.jump()








// 6. Crea una clase que haga uso de herencia
// 10. Sobrescribe un método de una clase que utilice herencia 
class Miguel extends Person {

    study(){
        console.log("Estudio progrmación")
    }

    walk(){
        console.log(`A ${this.name} no le apetece andar` )
    }

}

let miguel = new Miguel("Miguel",26,"Sin alas")

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
class GetPerson {

    #name
    #bank

    constructor(name, age, bank) {
        this.#name = name
        this.age = age
        this.#bank = bank
        
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let getPerson = new GetPerson("MiguelMR",26,"IBAN12345344")

console.log(getPerson.name)
getPerson.bank = "123445"

console.log(getPerson)


miguel.walk()