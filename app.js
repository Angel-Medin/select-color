/*Referencial al dom */

const inputRojo = document.getElementById('rojo');
const inputAzul = document.getElementById('azul');
const inputVerde = document.getElementById('verde');



const textoRojo = document.getElementById('texto-rojo');
const textoAzul = document.getElementById('texto-azul');
const textoVerde = document.getElementById('texto-verde');


let rojo = inputRojo.value;
let azul = inputAzul.value;
let verde = inputVerde.value;


textoRojo.innerText = rojo;
textoAzul.innerText = azul;
textoVerde.innerText = verde;


function actualizarColor(rojo, azul, verde) {
    const coloRgb = `rgb(${rojo}, ${azul}, ${verde})`;
    document.body.style.backgroundColor = coloRgb;

}

inputRojo.addEventListener('change', (e)  => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, azul, verde);
});

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, azul, verde);
});


inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});