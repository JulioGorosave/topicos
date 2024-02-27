
const body = document.querySelector('body');

function generarRandomParrafo(){
    const minPalabras= 50;
    const maxPalabras= 100;
    const palabras =[ 'panda','motel','alex','syntek','madona','lady','gaga','pxndx','volovan','maroon5','slpinkton','juanes','kalimba','camila']

    const parrafoLargo= Math.floor(Math.random()* (maxPalabras - minPalabras + 1)) + minPalabras;
    let parrafoText='';

    for (let i = 0; i < parrafoLargo; i++) {
        const palabraRandom = Math.floor(Math.random() * palabras.length);
        parrafoText += palabras[palabraRandom] + ' ';
    }

    return parrafoText.trim();

}


for (let i = 0; i < 5; i++) {
    const paragraph = document.createElement('p');
    const parrafoText = generarRandomParrafo();

    paragraph.textContent = `${parrafoText} [${parrafoText.length} caracteres]`;
    body.appendChild(paragraph);
}