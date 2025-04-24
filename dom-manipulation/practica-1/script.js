const button = document.querySelector('button')
const color = document.getElementById('color')


function geneateColorHex(){
    //let digits = '0123456789ABCDEF'
    let digits = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let colorHex = '#'

    for(let i = 0; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * 16)
        colorHex += digits[randomIndex]
    }

    return colorHex

}

button.addEventListener('click', () => {
    let randomColor = geneateColorHex()
    color.textContent = randomColor
    document.body.style.backgroundColor = randomColor
})