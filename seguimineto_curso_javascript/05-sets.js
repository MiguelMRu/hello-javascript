let mySet = new Set()

mySet = new Set(['Miguel', 'Mateos', 'Ruiz',25,true])

console.log(mySet)

mySet.add('123')
console.log(mySet)

mySet.delete('123')
console.log(mySet)  


//console.log(mySet.delete('Miguel'))

if(mySet.delete('Miguel')){
    console.log('Elemento eliminado')
}else{
    console.log('Elemento no encontrado')
}


console.log(mySet.has('Miguel'))

//size

console.log(mySet.size)

//Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

mySet.add('Miguel')
console.log(mySet) //No se pueden repetir elementos


mySet.add('miguel')
console.log(mySet)

