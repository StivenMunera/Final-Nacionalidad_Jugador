//Cargar en un arreglo las imagenes de los jugadores de futbol, tal cual el orden

let jugadores = ["lio.JPG","cr7.JPG","debruy.JPG","salah.JPG","neymar.JPG"];

//Arreglo que guardara la opcion correcta

let correcta = [2,4,0,1,3];

//Arreglo que guardara los jugadores a mostar en cada jugada

let opciones = [];

//Cargo en el arreglo las opciones que mostrara en cada jugada

opciones.push( ["Canada", "Africa","Argentina","Perú","España"]);
opciones.push( ["Venezuela", "Bolivia","Chile","España","Portugal"]);
opciones.push( ["Belgica", "Polonia","Chile","España","Mexico"]);
opciones.push( ["España", "Egipto","Arabia Saudita","Panama","Honduras"]);
opciones.push( ["Francia", "Argentina","Chile","Brasil","Mexico"]);

//Variable que guarda la posicion actual
let posActual = 0;

//Varuable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;
function comenzarJuego(){
    //Resetemaos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //Activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarJugador();
}

//Funcion que carga el siguiente jugador y sus opciones
function cargarJugador(){
    //controlo si se acaban los jugadores
    if(jugadores.length <= posActual)
        terminarJuego();
    
    else{//Cargo las opciones
        //limpiamos las clases uqe se asignaron
        limpiarOpciones();

        document.getElementById("imgJugador").src = "Images/" + jugadores[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual] [0];
        document.getElementById("n1").innerHTML = opciones[posActual] [1];
        document.getElementById("n2").innerHTML = opciones[posActual] [2];
        document.getElementById("n3").innerHTML = opciones[posActual] [3];
        document.getElementById("n4").innerHTML = opciones[posActual] [4];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("n4").className = "nombre";


    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
    document.getElementById("l4").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida correcta
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }
    else{//no acerto
        //agregamos clases para colocar en rojo la opcion elegida incorrecta 
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";        

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos a mostrar el siguiente jugador y sus opciones
    setTimeout(cargarJugador,1000);
}
function terminarJuego(){
    //Ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = jugadores.length - cantidadAcertadas;
    
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";


}