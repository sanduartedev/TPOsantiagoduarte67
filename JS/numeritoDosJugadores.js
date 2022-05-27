var numero="0000"
var puntaje=0
var puntaje1=0
var puntaje2=0
var nombreJugador=1
var numeroJugador=1
var contadorPartidas1=0
var contadorPartidas2=0
var jugador1="Participante 1"
var jugador2="Participante 2"

cambiarNombre1 = () =>{
    jugador1 = document.getElementById("nombreJugador1").value
    if (nombreJugador==1){
        document.getElementById("turno1").innerHTML = "Es tu turno, " + "&nbsp" + jugador1
    }
}
cambiarNombre2 = () =>{
    jugador2 = document.getElementById("nombreJugador2").value
    if (nombreJugador==2){
        document.getElementById("turno2").innerHTML = "Es tu turno, " + "&nbsp" + jugador2
    }
}
document.getElementById("turno1").innerHTML = "Es tu turno, " + "&nbsp" + jugador1
document.getElementById("turno1").style.backgroundColor = "green"
document.getElementById("turno2").style.backgroundColor = "red"   

while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
    var numero = parseInt(Math.random() * 9999) + 1
    var numero = numero.toString()
}
var cantidaddeintentos=0
function finalizarPartida(){
    promedio1=puntaje1/contadorPartidas1
    promedio2=puntaje2/contadorPartidas2
    if (promedio1<promedio2){
        swal("¡Ganó " + jugador1 + "! ", "Esperamos que hayan disfutado la partida");
    }
    else if (promedio2<promedio1){
        swal("¡Ganó " + jugador2 + "! ", "Esperamos que hayan disfutado la partida");
    }
    else if (promedio1=promedio2){
        swal("¡Partida empatada!", jugador1 + " y " + jugador2 + ", ¡son inteligentes por igual!");

    }
    document.getElementById("numerosColores").innerHTML = ""
    cantidaddeintentos=0
    document.getElementById("contador").innerHTML = ""
    numero="0000"
    puntaje=0
    puntaje1=0
    puntaje2=0
    nombreJugador=1
    numeroJugador=1
    contadorPartidas1=0
    contadorPartidas2=0
    document.getElementById("nombre1").innerHTML = "<b>" + jugador1 + "</b>"
    document.getElementById("nombre2").innerHTML = "<b>" + jugador2 + "</b>"
    document.getElementById("puntaje1").innerHTML = "<b>" + "Puntaje:" + "</b>" + "&nbsp"
    document.getElementById("partidas1").innerHTML = "<b>" + "Numeritos encontrados:" + "</b>" + "&nbsp"
    document.getElementById("puntaje2").innerHTML = "<b>" + "Puntaje:" + "</b>" + "&nbsp"
    document.getElementById("partidas2").innerHTML = "<b>" + "Numeritos encontrados:" + "</b>" + "&nbsp"
            
    while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
        numero = parseInt(Math.random() * 9999) + 1
        numero = numero.toString()
    }
    document.getElementById("respuesta").value = ""
    document.getElementById("numeroChequeado").innerHTML = "0000"
    document.getElementById("chequeoNumero").innerHTML = "¿?¿?"
}
function chequearNumero() {        
    let intento = document.getElementById("respuesta").value
    if (intento.length!=4){
        document.getElementById("respuesta").value = ""
        chequearNumero()
    }
    cantidaddeintentos=cantidaddeintentos+1
    verde="verde"+cantidaddeintentos.toString()
    amarillo="amarillo"+cantidaddeintentos.toString()
    rojo="rojo"+cantidaddeintentos.toString()
    intento = intento.toString()
    //document.getElementById("paratiempo").innerHTML =+ "" + numero
    document.getElementById("numeroChequeado").innerHTML = " "
    document.getElementById("numeroChequeado").innerHTML += "<f id='primerNumero'>" + intento[0] + "</f>"+ "<f id='segundoNumero'>" + intento[1] + "</f>" + "<f id='tercerNumero'>" + intento[2] + "</f>" + "<f id='cuartoNumero'>" + intento[3] + "</f>"
    document.getElementById("contador").innerHTML = "Cantidad de intentos: " 
    document.getElementById("contador").innerHTML =+ cantidaddeintentos
    
    if (intento[0]==numero[0]){
        posicion0="B"
        document.getElementById("primerNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id="+ verde + ">" + intento[0] + "</f>"
        document.getElementById(verde).style.color = "green" 
    }
    else if (intento[0]==numero[1]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id="+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById(amarillo).style.color = "yellow" 
    }
    else if (intento[0]==numero[2]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=a"+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById("a"+amarillo).style.color = "yellow" 
    }
    else if (intento[0]==numero[3]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById("b"+amarillo).style.color = "yellow" 
    }
    else{
        posicion0="M"
        document.getElementById("primerNumero").style.color = "red"
        document.getElementById("numerosColores").innerHTML += "<f id="+ rojo + ">" + intento[0] + "</f>"
        document.getElementById(rojo).style.color = "red" 
    }
    if (intento[1]==numero[1]){
        posicion1="B"
        document.getElementById("segundoNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ verde + ">" + intento[1] + "</f>"
        document.getElementById("b"+verde).style.color = "green" 
    }
    else if (intento[1]==numero[0]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("c"+amarillo).style.color = "yellow" 
    }
    else if (intento[1]==numero[2]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=d"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("d"+amarillo).style.color = "yellow" 
    }
    else if (intento[1]==numero[3]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=e"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("e"+amarillo).style.color = "yellow" 
    }
    else{
        posicion1="M"
        document.getElementById("segundoNumero").style.color = "red"
        document.getElementById("numerosColores").innerHTML += "<f id=a"+ rojo + ">" + intento[1] + "</f>"
        document.getElementById("a" + rojo).style.color = "red" 
    }
    if (intento[2]==numero[2]){
        posicion2="B"
        document.getElementById("tercerNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ verde + ">" + intento[2] + "</f>"
        document.getElementById("c"+verde).style.color = "green" 
    }
    else if (intento[2]==numero[0]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=g"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("g"+amarillo).style.color = "yellow" 
    }
    else if (intento[2]==numero[1]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=h"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("h"+amarillo).style.color = "yellow" 
    }
    else if (intento[2]==numero[3]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=i"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("i"+amarillo).style.color = "yellow" 
    }
    else{
        posicion2="M"
        document.getElementById("tercerNumero").style.color = "red"
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ rojo + ">" + intento[2] + "</f>"
        document.getElementById("b" + rojo).style.color = "red" 
    }
    if (intento[3]==numero[3]){
        posicion3="B"
        document.getElementById("cuartoNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id=d"+ verde + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("d"+verde).style.color = "green" 
    }
    else if (intento[3]==numero[0]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=j"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("j"+amarillo).style.color = "yellow" 
    }
    else if (intento[3]==numero[1]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=k"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("k"+amarillo).style.color = "yellow" 
    }
    else if (intento[3]==numero[2]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=l"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("l"+amarillo).style.color = "yellow" 
    }
    else{
        posicion3="M"
        document.getElementById("cuartoNumero").style.color = "red"
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ rojo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("c" + rojo).style.color = "red" 
    }
    function escribir(){
        resultado2= posicion0+posicion1+posicion2+posicion3
        resultado= intento + ": " +posicion0+posicion1+posicion2+posicion3
        document.getElementById("chequeoNumero").innerHTML = " "
        document.getElementById("chequeoNumero").innerHTML += resultado2 + "<br>"
    }
    function ganar(){
        if (posicion0=="B" && posicion1=="B" && posicion2=="B" && posicion3=="B" ) {
            if (nombreJugador==1){
                puntaje1 = parseInt(puntaje1)+parseInt(cantidaddeintentos)
                puntaje1 = puntaje1.toString()
                cantidaddeintentos = cantidaddeintentos.toString()
                document.getElementById("puntaje1").innerHTML = "<b>" + "Puntaje:" + "</b>" + "&nbsp" + puntaje1
                contadorPartidas1 = contadorPartidas1 + 1
                document.getElementById("partidas1").innerHTML = "<b>" + "Numeritos encontrados:" + "</b>" + "&nbsp" + contadorPartidas1
                swal("Bien, " + jugador1, "Lo lograste en " + cantidaddeintentos + " intentos", "success")
            }
            else if (nombreJugador==2){
                puntaje2=parseInt(puntaje2)+parseInt(cantidaddeintentos)
                puntaje2 = puntaje2.toString()
                cantidaddeintentos = cantidaddeintentos.toString()
                document.getElementById("puntaje2").innerHTML = "<b>" + "Puntaje:" + "</b>" + "&nbsp" + puntaje2
                contadorPartidas2+=1
                document.getElementById("partidas2").innerHTML = "<b>" + "Numeritos encontrados:" + "</b>" + "&nbsp" + contadorPartidas2
                swal("Bien, " + jugador2, "Lo lograste en " + cantidaddeintentos + " intentos", "success")
            }
            document.getElementById("numerosColores").innerHTML = ""
            cantidaddeintentos=0
            document.getElementById("contador").innerHTML = ""
            numero="0000"
            while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
                numero = parseInt(Math.random() * 9999) + 1
                numero = numero.toString()
            }
            document.getElementById("respuesta").value = ""
            document.getElementById("numeroChequeado").innerHTML = "0000"
            document.getElementById("chequeoNumero").innerHTML = "¿?¿?"
            numeroJugador=numeroJugador+1
            if(parseInt(numeroJugador)%2==0){
                nombreJugador=2
                document.getElementById("turno2").innerHTML = "Es tu turno, " + "&nbsp" + jugador2
                document.getElementById("turno1").innerHTML = "&nbsp"
                document.getElementById("turno1").style.backgroundColor = "red"
                document.getElementById("turno2").style.backgroundColor = "green"   


            }
            else{
                nombreJugador=1
                document.getElementById("turno1").innerHTML = "Es tu turno, " + "&nbsp" + jugador1
                document.getElementById("turno2").innerHTML = "&nbsp"
                document.getElementById("turno1").style.backgroundColor = "green"
                document.getElementById("turno2").style.backgroundColor = "red"   

            }
        }
    }
    escribir()
    ganar ()
}