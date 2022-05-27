var numero="0000"
var ganadas=0
var verde=""
var amarillo=""
var rojo=""

while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
    numero = parseInt(Math.random() * 9999) + 1
    numero = numero.toString()
}
//document.write(numero.length)
//if (numero.length == 3) {
//    numero = "0" + numero
//}
var cantidaddeintentos=0
function chequearNumero() {
    //var intento = prompt("Introduce tu número de 4 cifras: ")
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
    document.getElementById("contador2").innerHTML =+ ganadas
    document.getElementById("numeroChequeado").innerHTML = " "
    document.getElementById("numeroChequeado").innerHTML += "<f id='primerNumero'>" + intento[0] + "</f>"+ "<f id='segundoNumero'>" + intento[1] + "</f>" + "<f id='tercerNumero'>" + intento[2] + "</f>" + "<f id='cuartoNumero'>" + intento[3] + "</f>"
    //intento
    document.getElementById("contador").innerHTML = "Cantidad de intentos: " 
    document.getElementById("contador").innerHTML =+ cantidaddeintentos
    
    if (intento[0]==numero[0]){
        posicion0="B"
        document.getElementById("primerNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id="+ verde + ">" + intento[0] + "</f>"
        document.getElementById(verde).style.color = "green" 
        //document.getElementById("primerNumerito").style.color = "green"
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
        //document.getElementById("malos").innerHTML += intento[0] + " -- "
        document.getElementById("numerosColores").innerHTML += "<f id="+ rojo + ">" + intento[0] + "</f>"
        document.getElementById(rojo).style.color = "red" 
    }
    if (intento[1]==numero[1]){
        posicion1="B"
        document.getElementById("segundoNumero").style.color = "green"
        //document.getElementById("numerosColores").innerHTML += intento[1]
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
        //document.getElementById("malos").innerHTML += intento[1] + " -- "
        document.getElementById("numerosColores").innerHTML += "<f id=a"+ rojo + ">" + intento[1] + "</f>"
        document.getElementById("a" + rojo).style.color = "red" 
    }
    if (intento[2]==numero[2]){
        posicion2="B"
        document.getElementById("tercerNumero").style.color = "green"
        //document.getElementById("numerosColores").innerHTML += intento[2]
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
        //document.getElementById("malos").innerHTML += intento[2] + " -- "
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ rojo + ">" + intento[2] + "</f>"
        document.getElementById("b" + rojo).style.color = "red" 
    }
    if (intento[3]==numero[3]){
        posicion3="B"
        document.getElementById("cuartoNumero").style.color = "green"
        //document.getElementById("numerosColores").innerHTML += intento[3] + " -- "
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
        //document.getElementById("malos").innerHTML += intento[3] + " -- "
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ rojo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("c" + rojo).style.color = "red" 
    }
    //var resultado="El resultado de tu tirada es: " + intento[0]+" está "+posicion0+" - "+ intento[1]+" está "+posicion1+" - "+ intento[2]+" está "+posicion2+" - "+ intento[3]+" está "+posicion3
    function escribir(){
        resultado2= posicion0+posicion1+posicion2+posicion3
        resultado= intento + ": " +posicion0+posicion1+posicion2+posicion3
        document.getElementById("chequeoNumero").innerHTML = " "
        document.getElementById("chequeoNumero").innerHTML += resultado2 + "<br>"
        //document.getElementById("brm").innerHTML += "<f id='primerNumero'>" + intento[0] + "</f>"+ "<f id='segundoNumero'>" + intento[1] + "</f>" + "<f id='tercerNumero'>" + intento[2] + "</f>" + "<f id='cuartoNumero'>" + intento[3] + "</f>" + " -- "
        //document.getElementById("brm").innerHTML += "<f id='primerNumerito'>" + intento[0] + "</f>" +intento[1]+intento[2]+intento[3]+" -- "
        //document.getElementById("verde").style.color = "green"
        //document.getElementById("brm").innerHTML += resultado + " -- "
    }
    function ganar(){
        if (posicion0=="B" && posicion1=="B" && posicion2=="B" && posicion3=="B" ) {
            ganadas=ganadas+1
            //alert("¡GANASTE! Lo lograste en " + cantidaddeintentos + " intentos")
            //window.open("eljuegodelNumerito.html")
            cantidaddeintentos=0
            document.getElementById("contador").innerHTML =+ cantidaddeintentos
            document.getElementById("numerosColores").innerHTML = ""
            cantidaddeintentos=0
            numero="0000"
            while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
                numero = parseInt(Math.random() * 9999) + 1
                numero = numero.toString()
            }
            document.getElementById("respuesta").value = ""
            document.getElementById("numeroChequeado").innerHTML = "0000"
            document.getElementById("chequeoNumero").innerHTML = "¿?¿?"
            document.getElementById("contador2").innerHTML =+ ganadas

        }
    }
    
    escribir()
    ganar ()
    //document.write(resultado)
}