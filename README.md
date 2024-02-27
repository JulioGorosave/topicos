# INTRODUCCIÓN
En esta rama principal estan creadas 3 carpetas con scripts de los trabajos realizados

# Script1

El script1 genera 10 contenedores de tamaño 100 y les agrega un color aleatorio.

Esta parte selecciona el cuerpo del documento
```javascript
const body = document.querySelector('body')
```
Enseguida definimos un array de colores para guardar aqui los colores que van ser utilizados 
```javascript
const colors = ['red', 'purple']
```
Posteriormente utilizamos un ciclo for para repetirlo 10 veces
```javascript
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
```
Dentro de este ciclo se define la altura del parrafo el tamaño de pixeles y se crean los 'div'
Se utiliza Math.random para generar los colores aleatorios recibiendo el tamaño del arreglo como numeros para generar
```javascript
div.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
```
Por ultimo se añade al documento para verlo en la pagina
```javascript
div.appendChild(parrafo)
```

### Script2


### Script3
