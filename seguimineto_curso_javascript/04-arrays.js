let myArray = []

let myArray2 = new Array()


myArray = [1,2,3,4]


myArray = []

myArray[0] = 'Miguel'
myArray[1] = 'Mateos'
myArray[2] = 'Ruiz'

console.log(myArray)

// Metodos comunes

myArray = []

//push y pop

myArray.push('Miguel')
myArray.push('Mateos')
myArray.push('Ruiz')
console.log(myArray)    


console.log(myArray.pop()) //elimina el ultimo elemento del array y lo devuelve


console.log(myArray)

//shift y unshift

myArray.shift()
console.log(myArray)

myArray.unshift('Miguel',25)
console.log(myArray)    

console.log(myArray.length)


//slice 

let myNewArray = myArray.slice(1,3)

console.log(myNewArray)
console.log(myArray)    


//splice

myArray.splice(1,3) //elimina desde la posicion 1 3 elementos
console.log(myArray)    

myArray.splice(1,2,3) //elimina desde la posicion 1 2 elementos y añade un 3
console.log(myArray)    