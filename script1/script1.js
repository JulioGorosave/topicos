/*const body = document.querySelector('body')

const div = document.createElement('div')
div.style.height = '500px'
div.style.backgroundColor = 'pink'

const parrafo = document.createElement('p')
parrafo.textContent = 'soy un parrafo'
parrafo.style.color = 'blue'
parrafo.style.fontSize = '56px'

div.appendChild(parrafo)
body.appendChild(div)
*/

const body = document.querySelector('body')
const colors = ['red', 'purple']

for (let i=0 ; i<10 ; i++) {
    const div = document.createElement('div')
    div.style.height = '200px'
    div.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]

    const parrafo = document.createElement('p')
    parrafo.textContent = i+1
    parrafo.style.textAlign = 'center'
    parrafo.style.fontSize = '34px'
    div.appendChild(parrafo)

    body.appendChild(div)
}