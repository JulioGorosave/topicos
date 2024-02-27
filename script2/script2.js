

const body = document.querySelector('body');
const colors = ['mintcream', 'purple','blue','red','cyan', 'beige','aliceblue','aqua','blueviolet','bronw','crimson','darkgrey','darkgoldenrod','darkgreen','firebrick',
'gainsboro','ghostwhite','indigo','lime','maroon','mediumblue'];

//Pa guardar los colores usados alabenki
const usedColors = [];

for (let i = 0; i < 10; i++) {
    let randomColor;

    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (usedColors.includes(randomColor));

    usedColors.push(randomColor);

    const div = document.createElement('div');
    div.style.height = '200px';
    div.style.backgroundColor = randomColor;

    const parrafo = document.createElement('p');
    parrafo.textContent = i + 1;
    parrafo.style.textAlign = 'center';
    parrafo.style.fontSize = '100px';
    div.appendChild(parrafo);

    body.appendChild(div);
}