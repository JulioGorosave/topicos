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

# Script2
En este script usando el script anterior se agrego la funcionalidad de que los colores no se repitan, la estructura cuenta con 20 colores que no se repiten.
Los colores estan dados por:
```javascript
const colors = ['mintcream', 'purple','blue','red','cyan', 'beige','aliceblue','aqua','blueviolet','bronw','crimson','darkgrey','darkgoldenrod','darkgreen','firebrick',
'gainsboro','ghostwhite','indigo','lime','maroon','mediumblue'];
```
Támbien se agrego un arreglo vacio llamado 'usedColors' para guardar en el todos los colores que fueron utilizados.

```javascript
const usedColors = [];
```
De los principales cambios son que se utiliza un bucle do-while para seleccionar aleatoriamente un color del array colors y asegurarse de que no haya sido utilizado previamente. Si el color ya ha sido utilizado, se vuelve a intentar seleccionar otro color.

```javascript
    let randomColor;

    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (usedColors.includes(randomColor));

```
Támbien Se establece el contenido del párrafo como el valor actual de i más 1 (para que los números vayan de 1 a 10). Se establece el texto centrado y el tamaño de la fuente en 100 píxeles.

```javascript
parrafo.textContent = i + 1;
parrafo.style.textAlign = 'center';
parrafo.style.fontSize = '100px';
```


# Script3
