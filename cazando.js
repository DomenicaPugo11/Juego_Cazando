let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d")

let personajeCentro=canvas.width/2

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(personajeCentro,400,50,100);
}