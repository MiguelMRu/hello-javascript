let person = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno"
}

console.log(person.name)


console.log(person["name"])


person.name = "Brais"


person.age = "26"

console.log(person.name)
console.log(person.age)


delete person.age

console.log(person)


person.email = "miguelmateosruiz@gmail.com"

console.log(person)

person.age = 26
console.log(person)



let person2 = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()



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

console.log(person3.job.work())
console.log(person3.job)

console.log(person3.job.name)

//Igualdad de objetos

let person4 = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno"
}

console.log(person === person4)

console.log(person.age === person4.age)

//Iteracion

for (let key in person) {
    console.log(key + ": " + person4[key])
}

console.log(person3.job.work())

