document.getElementById("mostrar_teclado").type = "hidden"

lista_palabras=[]
numero_sorteado=""
palabra=""
document.getElementById("probar4").type = "hidden"
letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function palabra_elegida(){
    palabra_escrita=document.getElementById("palabraEscrita").value.toUpperCase()
    lista_palabras.push(palabra_escrita)
    document.getElementById("palabraEscrita").value=""
    sortear_palabra()
}
function sortear_palabra() {
    numero_sorteado = 0
    palabra = lista_palabras[numero_sorteado]
    cantidad_letras()
}

var errores=0
var aciertos=0
document.getElementById("imprimirPalabra").innerHTML = ""
function ocultar_teclado(){
    document.getElementById("ocultar_teclado").type = "hidden"
    for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "hidden"
    document.getElementById("mostrar_teclado").type = "visibility" 
}
function mostrar_teclado(){
    for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "visibility"
    document.getElementById("ocultar_teclado").type = "visibility"
    document.getElementById("mostrar_teclado").type = "hidden" 
}


function cantidad_letras(){
    for (var i = 0; i < palabra.length; i++){
        document.getElementById("imprimirPalabra").innerHTML += "<span id='span"+ i + "'>_" + "&nbsp" + "</span>"
    }     
}
function ganar(){
    if (parseInt(aciertos)==palabra.length){
        swal("¡Ganaste!", "¡Muy Bien!", "success")
        document.getElementById("imprimirPalabra").innerHTML = ""
        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahor0.jpg' alt='ahorcado'>"
        errores=0
        aciertos=0
        document.getElementById("letrasNo").innerHTML = ""
        document.getElementById("probar4").type = "visibility"
        for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "visibility"
    }
}

function perder(){
    if (parseInt(errores)>5){
        swal("¡Perdiste!", "Prueba otra vez")
        document.getElementById("imprimirPalabra").innerHTML = ""
        document.getElementById("letrasNo").innerHTML = ""
        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahor6.jpg' alt='ahorcado6'>"
        errores=0
        aciertos=0
        for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "visibility"
        document.getElementById("probar4").type = "visibility"

    }
}

function probar_letra(value){
    //alert("tu letra fue" + value)
    //alert(palabra)
    value=value.toUpperCase()
    if (palabra.includes(value)){
        //donde_esta(value)
        for (var j = 0; j < palabra.length; j++){
            if (palabra[j]==value){
            document.getElementById("span"+ j).innerHTML = value + "&nbsp"
            aciertos=aciertos+1
            //alert(aciertos)
            //alert(j)
            }
        }
        //alert("La letra está")
        document.getElementById(value).value = " "
        document.getElementById("pantallita").value = ""             
        ganar()
    }
    else{
        errores=errores+1

        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahor" + errores + ".jpg' alt='ahorcado'" + errores +">"
        document.getElementById("letrasNo").style.color = "red"
        document.getElementById("letrasNo").style.fontFamily= "Monofett-Regular, Arial, Helvetica, sans-serif"
        document.getElementById("letrasNo").innerHTML += value + "&nbsp" 
        document.getElementById(value).value = " "
        document.getElementById("pantallita").value = "" 
        perder()
    }
}
sortear_palabra()
function volver_a_empezar(){
    for (var i = 0; i < letras.length; i++){
        document.getElementById(letras[i]).value = letras[i]
    }
    lista_palabras.splice(palabra_escrita,1)
    sortear_palabra()
    document.getElementById("probar4").type = "hidden"
    document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahor0.jpg' alt='ahorcado'>"
}