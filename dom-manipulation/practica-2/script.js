const redInput = document.getElementById('rojo')
const greenInput = document.getElementById('verde')
const blueInput = document.getElementById('azul')

const redText = document.getElementById('texto-rojo')
const greenText= document.getElementById('texto-verde')
const blueText = document.getElementById('texto-azul')


let red = redInput.value
let green = greenInput.value
let blue = blueInput.value

redText.innerText = red
greenText.innerText = green
blueText.innerText = blue

function updateColor(red, green, blue){
    const colorRGB = `rgb(${red},${green},${blue} )`
    document.body.style.backgroundColor = colorRGB
}

redInput.addEventListener('change',(e) => {
    red = e.target.value
    redText.innerText = red
    updateColor(red,blue,green)
})

greenInput.addEventListener('change',(e) => {
    green = e.target.value
    greenText.innerText = green
    updateColor(red,blue,green)
})

blueInput.addEventListener('change',(e) => {
    blue = e.target.value
    blueText.innerText = blue
    updateColor(red,blue,green)
})