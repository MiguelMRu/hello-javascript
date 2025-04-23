
//modificar css con javascript
const firstTopping = document.querySelector('.topping')

// firstTopping.style.backgroundColor = 'blue'
// firstTopping.style.color = '#6dff00'
// firstTopping.style.textTransform = 'uppercase'

//modificar texto
const title = document.getElementById('titulo')
title.innerText = 'Toppings de Pizza'

//modificar atributos
const link = document.getElementsByTagName('a')

console.log(link[0].getAttribute('href'))

link[0].setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform')

//agregar o modificar clases

firstTopping.classList.add('texto-verde')

//comprueba si tienes una clase
firstTopping.classList.contains('fondo-marron') 

//firstTopping.classList.remove('texto-verde')


//crear elementos

const toppingList = document.getElementById('lista-toppings')

const newTopping = document.createElement('li')
newTopping.classList.add('topping','fondo-marron')
newTopping.innerText = 'Queso'

toppingList.append(newTopping)

//eliminar un elemento

newTopping.remove()


//Recorrel el dom

//Obtener el padre
console.log(toppingList.parentElement)

//Obetenr los hijos
console.log(toppingList.children) //Todos
console.log(toppingList.children[0]) //el primero

console.log(toppingList.firstElementChild)
console.log(toppingList.lastElementChild)


//Obetner los hermanos
console.log(toppingList.previousElementSibling)
console.log(toppingList.nextElementSibling)

const toppings = document.getElementsByClassName('topping')


function showClick(e){
    console.log(e.target.innerText)
}

for (const topping of toppings){
    topping.addEventListener('click',showClick)
}

