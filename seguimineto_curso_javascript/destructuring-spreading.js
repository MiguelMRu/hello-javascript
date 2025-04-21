let myArray = [1, 2, 3, 4]

let person = {
    name: "Miguel",
    age: 26,
    alias: "Ninguno"
}

//Desestructuracion

//Arrays

let [myValue1, myValue2, myValue3]  = myArray

console.log(myValue1)
console.log(myValue2)
console.log(myValue3)


//Ignorar elementos

let [myValue4 , , , myValue5] = myArray

console.log(myValue4)
console.log(myValue5)


let {name, age, alias} = person //el nombre de la variable tiene que ser el mismo que de la clave

console.log(name)
console.log(age)
console.log(alias)

let {name: name2, age: age2, alias: alias2} = person //el nombre de la variable tiene que ser el mismo que de la clave

console.log(name2)
console.log(age2)
console.log(alias2)


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

let {job: {name: jobName}} = person3

console.log(jobName)

//spreading - Propagacion

let myArray2 = [...myArray]

let myArray3 = [...myArray, 5, 6]

console.log(myArray3)

