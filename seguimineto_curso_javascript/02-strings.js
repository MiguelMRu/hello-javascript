let myName = 'Miguel'

let greeting = 'Hola, ' +myName+ '!'
console.log(greeting)

console.log(greeting.length)

console.log(greeting[0])
console.log(greeting[1])


console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Hola'))
console.log(greeting.includes('Miguel'))
console.log(greeting.includes('Hola'))
console.log(greeting.includes('Miguel'))
console.log(greeting.slice(0,10))
console.log(greeting.replace('Migue','Pringao'))


//Template literals

let message = `Hola este es una cadena 
            de text de varias lineas`
console.log(message)

let email = 'miguelmateosruiz@gmail.com'

console.log(`Hola, ${myName}! y mi email es ${email}`)