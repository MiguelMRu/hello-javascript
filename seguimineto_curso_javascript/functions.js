function myFunction() {
    console.log('Hola!!!!!!!!!!!')
}

myFunction()


//Parametros

function myFunParams(name) {
    console.log(`Hola, ${name}`)
}


myFunParams('Miguel')


//funciones aninimas

const myfunc2 = function(name) {
    console.log(`Hola, ${name}`)
}


//Arrow functions

const myfunc3 = (name) => {
    console.log(`Hola, ${name}`)
}


const myfunc4 = (name) => console.log(`Hola, ${name}`)


myfunc3("Brais Moure")

myfunc3("Alba Tejedor")

function sum (a = 0, b = 0) {
    console.log(a +b)
}

sum(2,3)


function mult(a, b){
    return a*b
}

let result = mult(5,10)
console.log(result)

//funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern(){
        console.log("Interna")
    }
    intern()
}

extern()


myArray = [1,2,3,4]

myArray.forEach((element) => console.log(element))