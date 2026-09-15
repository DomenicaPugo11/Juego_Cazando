let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d")

const ALTO_GATO=100
const ANCHO_GATO=50
const ALTO_COMIDA=50
const ANCHO_COMIDA=50

let personajeCentro=canvas.width/2
let personajeSuelo=canvas.height-ALTO_GATO

let gatoX=0
let gatoY=0
let comidaX=0
let comidaY=0

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(personajeCentro,personajeSuelo,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    comidaX=comidaX+canvas.width-ANCHO_COMIDA
    comidaY=comidaY+canvas.height-ALTO_COMIDA
    graficarGato();
    graficarComida();

}