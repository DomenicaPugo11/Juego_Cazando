let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d")

const ALTO_GATO=100;
const ANCHO_GATO=50;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

let gatoX=canvas.width/2;
let gatoY=canvas.height-ALTO_GATO;
let comidaX=0;
let comidaY=0;
let puntaje=0;

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"blue");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"green");
}

function iniciarJuego(){
    comidaX=comidaX+canvas.width-ANCHO_COMIDA
    comidaY=comidaY+canvas.height-ALTO_COMIDA
    graficarGato();
    graficarComida();

}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX=gatoX-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if (comidaX+ANCHO_COMIDA>gatoX && comidaX<gatoX+ANCHO_GATO
        && comidaY+ALTO_COMIDA>gatoY && comidaY<gatoY+ALTO_GATO
    ){
        alert("Atrapadooo!!");
        comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
        comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
        limpiarCanva();
        graficarGato();
        graficarComida();
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje);
    }
}

