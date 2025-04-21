

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
        
    }
}

let person = new Person("Miguel",26,"")

console.log(person)


class PrivatePerson {

    #bank // propiedad privada de la clase

    constructor(name, age, alias,bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
        
    }

    pay(){
        this.#bank
    }
}


class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
        
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}


//Herencia


class Animal {

    constructor(name) {
        this.name = name
        
    }

    sound() {
        console.log("Emite un sonido genérico")
    }
}


class Dog extends Animal {

    run(){
        console.log("El perro corre")
    }

    sound() {
        console.log("Guau Guau!!")
    }

    
}

class Fish extends Animal {

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}



let myDog = new Dog("Leo")

myDog.run()
myDog.sound()

let myFish = new Fish("Pescadito", "10cm")
console.log(myFish.size)
myFish.swim()


//Métodos estáticos

class MathOperations{
    
    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,6))