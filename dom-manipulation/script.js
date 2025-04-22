
//modificar css con javascript
const firstTopping = document.querySelector('.topping')

firstTopping.style.backgroundColor = 'blue'
firstTopping.style.color = '#6dff00'
firstTopping.style.textTransform = 'uppercase'

//modificar texto
const title = document.getElementById('titulo')
title.innerText = 'Toppings de Pizza'

//modificar atributos
const link = document.getElementsByTagName('a')

console.log(link[0].getAttribute('href'))

link[0].setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform')

//agregar o modificar clases