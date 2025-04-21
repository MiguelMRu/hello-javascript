//Map o dicceionario

let myMap = new Map()

myMap = new Map([
    ['name','Miguel'],
    ['email', 'miguelmateosruiz@gmail.com'],
    ['age',25]
])

console.log(myMap)

//set añade o actualiza un valor

myMap.set('alias','Miguel')

console.log(myMap)


myMap.set('name','Alba')

console.log(myMap)

//get

console.log(myMap.get('name'))

console.log(myMap.get('surname'))

// has

console.log(myMap.has('surname'))
console.log(myMap.has('age'))

//delete

myMap.delete('email')
console.log(myMap)

//clear

//myMap.clear()
//console.log(myMap)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.size)
console.log(myMap.entries())