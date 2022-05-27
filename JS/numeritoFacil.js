var numero="0000"
var verde=""
var amarillo=""
var rojo=""

//document.write(numero + "<br>")
while (numero[0]==numero[1] || numero[0]==numero[2] || numero[0]==numero[3] || numero[1]==numero[2] || numero[1]==numero[3] || numero[2]==numero[3] || numero.length == 3 || numero.length == 2 || numero.length == 1) {
    var numero = parseInt(Math.random() * 9999) + 1
    var numero = numero.toString()
    //document.write(numero + "<br>")
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
    document.getElementById("numeroChequeado").innerHTML = " "
    document.getElementById("numeroChequeado").innerHTML += "<f id='primerNumero'>" + intento[0] + "</f>"+ "<f id='segundoNumero'>" + intento[1] + "</f>" + "<f id='tercerNumero'>" + intento[2] + "</f>" + "<f id='cuartoNumero'>" + intento[3] + "</f>"
    //intento
    document.getElementById("contador").innerHTML = "Cantidad de intentos: " 
    document.getElementById("contador").innerHTML =+ cantidaddeintentos
    document.getElementById("buenos0").innerHTML = "0"
    document.getElementById("buenos1").innerHTML = "1"
    document.getElementById("buenos2").innerHTML = "2"
    document.getElementById("buenos3").innerHTML = "3"
    document.getElementById("buenos4").innerHTML = "4"
    document.getElementById("buenos5").innerHTML = "5"
    document.getElementById("buenos6").innerHTML = "6"
    document.getElementById("buenos7").innerHTML = "7"
    document.getElementById("buenos8").innerHTML = "8"
    document.getElementById("buenos9").innerHTML = "9"
    document.getElementById("regulares0").innerHTML = "0"
    document.getElementById("regulares1").innerHTML = "1"
    document.getElementById("regulares2").innerHTML = "2"
    document.getElementById("regulares3").innerHTML = "3"
    document.getElementById("regulares4").innerHTML = "4"
    document.getElementById("regulares5").innerHTML = "5"
    document.getElementById("regulares6").innerHTML = "6"
    document.getElementById("regulares7").innerHTML = "7"
    document.getElementById("regulares8").innerHTML = "8"
    document.getElementById("regulares9").innerHTML = "9"
    document.getElementById("malos0").innerHTML = "0"
    document.getElementById("malos1").innerHTML = "1"
    document.getElementById("malos2").innerHTML = "2"
    document.getElementById("malos3").innerHTML = "3"
    document.getElementById("malos4").innerHTML = "4"
    document.getElementById("malos5").innerHTML = "5"
    document.getElementById("malos6").innerHTML = "6"
    document.getElementById("malos7").innerHTML = "7"
    document.getElementById("malos8").innerHTML = "8"
    document.getElementById("malos9").innerHTML = "9"
    if (intento[0]==numero[0]){
        posicion0="B"
        document.getElementById("primerNumero").style.color = "green"
        document.getElementById("numerosColores").innerHTML += "<f id="+ verde + ">" + intento[0] + "</f>"
        document.getElementById(verde).style.color = "green" 
        if (intento[0]=="0"){
            document.getElementById("buenos0").style.color = "green"
        }
        else if (intento[0]=="1"){
            document.getElementById("buenos1").style.color = "green"
        }
        else if (intento[0]=="2"){
            document.getElementById("buenos2").style.color = "green"
        }
        else if (intento[0]=="3"){
            document.getElementById("buenos3").style.color = "green"
        }
        else if (intento[0]=="4"){
            document.getElementById("buenos4").style.color = "green"
        }
        else if (intento[0]=="5"){
            document.getElementById("buenos5").style.color = "green"
        }
        else if (intento[0]=="6"){
            document.getElementById("buenos6").style.color = "green"
        }
        else if (intento[0]=="7"){
            document.getElementById("buenos7").style.color = "green"
        }
        else if (intento[0]=="8"){
            document.getElementById("buenos8").style.color = "green"
        }
        else if (intento[0]=="9"){
            document.getElementById("buenos9").style.color = "green"
        }
        }
    else if (intento[0]==numero[1]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id="+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById(amarillo).style.color = "yellow" 
        if (intento[0]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[0]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[0]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[0]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[0]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[0]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[0]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[0]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[0]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[0]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }
    }
    else if (intento[0]==numero[2]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=a"+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById("a"+amarillo).style.color = "yellow" 
        if (intento[0]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[0]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[0]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[0]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[0]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[0]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[0]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[0]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[0]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[0]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }
    }
    else if (intento[0]==numero[3]){
        posicion0="R"
        document.getElementById("primerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ amarillo + ">" + intento[0] + "</f>"
        document.getElementById("b"+amarillo).style.color = "yellow"
        if (intento[0]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[0]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[0]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[0]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[0]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[0]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[0]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[0]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[0]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[0]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else{
    //else if (intento[0]!=numero[0] && intento[0]!=numero[1] && intento[0]!=numero[2] && intento[0]!=numero[3]){
        posicion0="M"
        document.getElementById("primerNumero").style.color = "red"
        //document.getElementById("malos").innerHTML += intento[0] + "&nbsp"
        document.getElementById("numerosColores").innerHTML += "<f id="+ rojo + ">" + intento[0] + "</f>"
        document.getElementById(rojo).style.color = "red" 
        if (intento[0]=="0"){
            document.getElementById("malos0").style.color = "red"
        }
        else if (intento[0]=="1"){
            document.getElementById("malos1").style.color = "red"
        }
        else if (intento[0]=="2"){
            document.getElementById("malos2").style.color = "red"
        }
        else if (intento[0]=="3"){
            document.getElementById("malos3").style.color = "red"
        }
        else if (intento[0]=="4"){
            document.getElementById("malos4").style.color = "red"
        }
        else if (intento[0]=="5"){
            document.getElementById("malos5").style.color = "red"
        }
        else if (intento[0]=="6"){
            document.getElementById("malos6").style.color = "red"
        }
        else if (intento[0]=="7"){
            document.getElementById("malos7").style.color = "red"
        }
        else if (intento[0]=="8"){
            document.getElementById("malos8").style.color = "red"
        }
        else if (intento[0]=="9"){
            document.getElementById("malos9").style.color = "red"
        }
    }
    if (intento[1]==numero[1]){
        posicion1="B"
        document.getElementById("segundoNumero").style.color = "green"
        //document.getElementById("numerosColores").innerHTML += intento[1]
        document.getElementById("numerosColores").innerHTML += "<f id=b"+ verde + ">" + intento[1] + "</f>"
        document.getElementById("b"+verde).style.color = "green"
        //document.getElementById("buenos1").innerHTML = intento[1] + "&nbsp" + "-" + "&nbsp"
        if (intento[1]=="0"){
            document.getElementById("buenos0").style.color = "green"
        }
        else if (intento[1]=="1"){
            document.getElementById("buenos1").style.color = "green"
        }
        else if (intento[1]=="2"){
            document.getElementById("buenos2").style.color = "green"
        }
        else if (intento[1]=="3"){
            document.getElementById("buenos3").style.color = "green"
        }
        else if (intento[1]=="4"){
            document.getElementById("buenos4").style.color = "green"
        }
        else if (intento[1]=="5"){
            document.getElementById("buenos5").style.color = "green"
        }
        else if (intento[1]=="6"){
            document.getElementById("buenos6").style.color = "green"
        }
        else if (intento[1]=="7"){
            document.getElementById("buenos7").style.color = "green"
        }
        else if (intento[1]=="8"){
            document.getElementById("buenos8").style.color = "green"
        }
        else if (intento[1]=="9"){
            document.getElementById("buenos9").style.color = "green"
        }
    }
    else if (intento[1]==numero[0]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("c"+amarillo).style.color = "yellow" 
        if (intento[1]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[1]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[1]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[1]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[1]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[1]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[1]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[1]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[1]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[1]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }
    }
    else if (intento[1]==numero[2]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=d"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("d"+amarillo).style.color = "yellow"
        if (intento[1]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[1]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[1]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[1]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[1]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[1]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[1]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[1]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[1]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[1]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else if (intento[1]==numero[3]){
        posicion1="R"
        document.getElementById("segundoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=e"+ amarillo + ">" + intento[1] + "</f>"
        document.getElementById("e"+amarillo).style.color = "yellow"
        if (intento[1]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[1]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[1]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[1]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[1]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[1]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[1]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[1]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[1]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[1]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else{
        //else if (intento[1]!=numero[0] && intento[1]!=numero[1] && intento[1]!=numero[2] && intento[1]!=numero[3]){
        posicion1="M"
        document.getElementById("segundoNumero").style.color = "red"
        //document.getElementById("malos").innerHTML += intento[1] + "&nbsp"
        document.getElementById("numerosColores").innerHTML += "<f id=a"+ rojo + ">" + intento[1] + "</f>"
        document.getElementById("a" + rojo).style.color = "red" 
        if (intento[1]=="0"){
            document.getElementById("malos0").style.color = "red"
        }
        else if (intento[1]=="1"){
            document.getElementById("malos1").style.color = "red"
        }
        else if (intento[1]=="2"){
            document.getElementById("malos2").style.color = "red"
        }
        else if (intento[1]=="3"){
            document.getElementById("malos3").style.color = "red"
        }
        else if (intento[1]=="4"){
            document.getElementById("malos4").style.color = "red"
        }
        else if (intento[1]=="5"){
            document.getElementById("malos5").style.color = "red"
        }
        else if (intento[1]=="6"){
            document.getElementById("malos6").style.color = "red"
        }
        else if (intento[1]=="7"){
            document.getElementById("malos7").style.color = "red"
        }
        else if (intento[1]=="8"){
            document.getElementById("malos8").style.color = "red"
        }
        else if (intento[1]=="9"){
            document.getElementById("malos9").style.color = "red"
        }
    }
    if (intento[2]==numero[2]){
        posicion2="B"
        document.getElementById("tercerNumero").style.color = "green"
        //document.getElementById("buenos2").innerHTML = intento[2] + "&nbsp" + "-" + "&nbsp"
        //document.getElementById("numerosColores").innerHTML += intento[2]
        document.getElementById("numerosColores").innerHTML += "<f id=c"+ verde + ">" + intento[2] + "</f>"
        document.getElementById("c"+verde).style.color = "green" 
        if (intento[2]=="0"){
            document.getElementById("buenos0").style.color = "green"
        }
        else if (intento[2]=="1"){
            document.getElementById("buenos1").style.color = "green"
        }
        else if (intento[2]=="2"){
            document.getElementById("buenos2").style.color = "green"
        }
        else if (intento[2]=="3"){
            document.getElementById("buenos3").style.color = "green"
        }
        else if (intento[2]=="4"){
            document.getElementById("buenos4").style.color = "green"
        }
        else if (intento[2]=="5"){
            document.getElementById("buenos5").style.color = "green"
        }
        else if (intento[2]=="6"){
            document.getElementById("buenos6").style.color = "green"
        }
        else if (intento[2]=="7"){
            document.getElementById("buenos7").style.color = "green"
        }
        else if (intento[2]=="8"){
            document.getElementById("buenos8").style.color = "green"
        }
        else if (intento[2]=="9"){
            document.getElementById("buenos9").style.color = "green"
        }
    }
    else if (intento[2]==numero[0]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=g"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("g"+amarillo).style.color = "yellow" 
        if (intento[2]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[2]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[2]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[2]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[2]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[2]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[2]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[2]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[2]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[2]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }
    }
    else if (intento[2]==numero[1]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=h"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("h"+amarillo).style.color = "yellow" 
        if (intento[2]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[2]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[2]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[2]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[2]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[2]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[2]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[2]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[2]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[2]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }
    }
    else if (intento[2]==numero[3]){
        posicion2="R"
        document.getElementById("tercerNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=i"+ amarillo + ">" + intento[2] + "</f>"
        document.getElementById("i"+amarillo).style.color = "yellow"
        if (intento[2]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[2]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[2]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[2]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[2]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[2]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[2]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[2]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[2]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[2]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else{
        //else if (intento[2]!=numero[0] && intento[2]!=numero[1] && intento[2]!=numero[2] && intento[2]!=numero[3]){
        posicion2="M"
        document.getElementById("tercerNumero").style.color = "red"
        //document.getElementById("malos").innerHTML += intento[2] + "&nbsp"
        document.getElementById("numerosColores").innerHTML += "<f id=z"+ rojo + ">" + intento[2] + "</f>"
        document.getElementById("z" + rojo).style.color = "red" 
        if (intento[2]=="0"){
            document.getElementById("malos0").style.color = "red"
        }
        else if (intento[2]=="1"){
            document.getElementById("malos1").style.color = "red"
        }
        else if (intento[2]=="2"){
            document.getElementById("malos2").style.color = "red"
        }
        else if (intento[2]=="3"){
            document.getElementById("malos3").style.color = "red"
        }
        else if (intento[2]=="4"){
            document.getElementById("malos4").style.color = "red"
        }
        else if (intento[2]=="5"){
            document.getElementById("malos5").style.color = "red"
        }
        else if (intento[2]=="6"){
            document.getElementById("malos6").style.color = "red"
        }
        else if (intento[2]=="7"){
            document.getElementById("malos7").style.color = "red"
        }
        else if (intento[2]=="8"){
            document.getElementById("malos8").style.color = "red"
        }
        else if (intento[2]=="9"){
            document.getElementById("malos9").style.color = "red"
        }
    }
    if (intento[3]==numero[3]){
        posicion3="B"
        document.getElementById("cuartoNumero").style.color = "green"
        //document.getElementById("buenos3").innerHTML = intento[3]
        //document.getElementById("numerosColores").innerHTML += intento[3] + " -- "
        document.getElementById("numerosColores").innerHTML += "<f id=d"+ verde + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("d"+verde).style.color = "green" 
        if (intento[3]=="0"){
            document.getElementById("buenos0").style.color = "green"
        }
        else if (intento[3]=="1"){
            document.getElementById("buenos1").style.color = "green"
        }
        else if (intento[3]=="2"){
            document.getElementById("buenos2").style.color = "green"
        }
        else if (intento[3]=="3"){
            document.getElementById("buenos3").style.color = "green"
        }
        else if (intento[3]=="4"){
            document.getElementById("buenos4").style.color = "green"
        }
        else if (intento[3]=="5"){
            document.getElementById("buenos5").style.color = "green"
        }
        else if (intento[3]=="6"){
            document.getElementById("buenos6").style.color = "green"
        }
        else if (intento[3]=="7"){
            document.getElementById("buenos7").style.color = "green"
        }
        else if (intento[3]=="8"){
            document.getElementById("buenos8").style.color = "green"
        }
        else if (intento[3]=="9"){
            document.getElementById("buenos9").style.color = "green"
        }
    }
    //else if (intento[3]==numero[0] || intento[3]==numero[1] || intento[3]==numero[2]){
    //    posicion3="R"
    //    document.getElementById("cuartoNumero").style.color = "yellow"
    //    document.getElementById("numerosColores").innerHTML += "<f id=j"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
    //    document.getElementById("j"+amarillo).style.color = "yellow" 
    //}
    else if (intento[3]==numero[0]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=z"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("z"+amarillo).style.color = "yellow"
        if (intento[3]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[3]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[3]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[3]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[3]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[3]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[3]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[3]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[3]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[3]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else if (intento[3]==numero[1]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=k"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("k"+amarillo).style.color = "yellow"
        if (intento[3]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[3]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[3]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[3]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[3]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[3]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[3]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[3]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[3]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[3]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        } 
    }
    else if (intento[3]==numero[2]){
        posicion3="R"
        document.getElementById("cuartoNumero").style.color = "yellow"
        document.getElementById("numerosColores").innerHTML += "<f id=l"+ amarillo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("l"+amarillo).style.color = "yellow"
        if (intento[3]=="0"){
            document.getElementById("regulares0").style.color = "yellow"
        }
        else if (intento[3]=="1"){
            document.getElementById("regulares1").style.color = "yellow"
        }
        else if (intento[3]=="2"){
            document.getElementById("regulares2").style.color = "yellow"
        }
        else if (intento[3]=="3"){
            document.getElementById("regulares3").style.color = "yellow"
        }
        else if (intento[3]=="4"){
            document.getElementById("regulares4").style.color = "yellow"
        }
        else if (intento[3]=="5"){
            document.getElementById("regulares5").style.color = "yellow"
        }
        else if (intento[3]=="6"){
            document.getElementById("regulares6").style.color = "yellow"
        }
        else if (intento[3]=="7"){
            document.getElementById("regulares7").style.color = "yellow"
        }
        else if (intento[3]=="8"){
            document.getElementById("regulares8").style.color = "yellow"
        }
        else if (intento[3]=="9"){
            document.getElementById("regulares9").style.color = "yellow"
        }  
    }
    else{
    //else if (intento[3]!=numero[0] && intento[3]!=numero[1] && intento[3]!=numero[2] && intento[3]!=numero[3]){
        posicion3="M"
        document.getElementById("cuartoNumero").style.color = "red"
        //document.getElementById("malos").innerHTML += intento[3] + "&nbsp"
        document.getElementById("numerosColores").innerHTML += "<f id=x"+ rojo + ">" + intento[3] + "</f>" + "<br>"
        document.getElementById("x" + rojo).style.color = "red" 
        if (intento[3]=="0"){
            document.getElementById("malos0").style.color = "red"
        }
        else if (intento[3]=="1"){
            document.getElementById("malos1").style.color = "red"
        }
        else if (intento[3]=="2"){
            document.getElementById("malos2").style.color = "red"
        }
        else if (intento[3]=="3"){
            document.getElementById("malos3").style.color = "red"
        }
        else if (intento[3]=="4"){
            document.getElementById("malos4").style.color = "red"
        }
        else if (intento[3]=="5"){
            document.getElementById("malos5").style.color = "red"
        }
        else if (intento[3]=="6"){
            document.getElementById("malos6").style.color = "red"
        }
        else if (intento[3]=="7"){
            document.getElementById("malos7").style.color = "red"
        }
        else if (intento[3]=="8"){
            document.getElementById("malos8").style.color = "red"
        }
        else if (intento[3]=="9"){
            document.getElementById("malos9").style.color = "red"
        }
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
            swal("¡Felicitaciones!", "Lo lograste en " + cantidaddeintentos + " intentos", "success")
            //alert("¡GANASTE! Lo lograste en " + cantidaddeintentos + " intentos")
            //window.open("eljuegodelNumerito.html")
        }
        if (cantidaddeintentos=="1"){
            document.getElementById("consejo").innerHTML = "<b>" + "Consejo:"  + "<br>" + "</b>" + "<br>" + "Nunca es útil volver a probar un número que está Mal"
        }
        else if (cantidaddeintentos=="2"){
            document.getElementById("consejo").innerHTML = "<b>" + "Consejo:"  + "<br>" + "</b>" + "<br>" + "Nunca es útil volver a probar un número que está Regular en la misma posición"
        }
        else if (cantidaddeintentos=="3"){
            document.getElementById("consejo").innerHTML = "<b>" + "Consejo:"  + "<br>" + "</b>" + "<br>" + "A veces es útil no volver a probar un número que está Bien y aprovechar ese espacio para buscar si está otro número"
        }
        else {
            document.getElementById("consejo").innerHTML = "<b>" + "¡Estás muy cerca de ganar!"+ "</b>"
        }
    }
    escribir()
    ganar ()
    //document.write(resultado)
}
