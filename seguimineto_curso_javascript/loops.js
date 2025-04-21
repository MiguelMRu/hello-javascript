for (let i = 0; i < 5; i++){
    console.log(i)
}

const number = [1,2,3,4,5]

for (let i= 0; i< number.length; i++)[
    console.log(`Elemento: ${number[i]}`)
]

let i = 0 

while(i<5){
    console.log(`Hola ${i}`)
    i++
}

i = 6

do {
    console.log(`Hola ${i}`)
    i++
}  while(i<5)


// for of
let myArray = [1,2,3,4]
let mySet = new Set(['Miguel', 'Mateos', 'Ruiz',25,true])

let myMap = new Map([
    ['name','Miguel'],
    ['email', 'miguelmateosruiz@gmail.com'],
    ['age',25]
])

for(let valor of myArray){
    console.log(valor)
}


for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

myString = 'Miguel'

for(let valor of myString){
    console.log(valor)
}

for (let i = 0; i < 10; i++){
    if(i == 5){
        continue
    } else if (i == 8){
        break
    }

    console.log(i)
}