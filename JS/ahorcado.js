document.getElementById("mostrar_teclado").type = "hidden"
lista_palabras=["CASA", "AUTO", "COCHE", "MONTAÑA", "RAIZ", "CALDERO", "SEPTIMO", "PROFESOR", "DIRECTORA", "EGRESADOS", "CANIBAL", "PERRO", "MANDARINA", "PELOTA", "REMERA", "TITERE", "CUCARACHA", "TOMATE", "CABEZA", "PANTALON", "DINOSAURIO", "MEDICO", "CABLE", "PRESIDENTE", "MANGUERA", "FLORES", "TRUENO", "ENVIDIA", "CANDOMBE", "CELEBRACION", "FIAMBRE", "PEQUEÑO"]
numero_sorteado=""
palabra=""
document.getElementById("probar2").type = "hidden"
letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function sortear_palabra() {
    numero_sorteado = parseInt(Math.random()*lista_palabras.length)
    palabra = lista_palabras[numero_sorteado]
    cantidad_letras()
}
var errores=0
var aciertos=0
document.getElementById("imprimirPalabra").innerHTML = ""
//alert(palabra_lista)

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
        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahorcado.jpg' alt='ahorcado'>"
        errores=0
        aciertos=0
        document.getElementById("letrasNo").innerHTML = ""
        document.getElementById("probar2").type = "visibility"
        for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "visibility"
    }
}

function perder(){
    if (parseInt(errores)>5){
        swal("¡Perdiste!", "Prueba otra vez")
        document.getElementById("imprimirPalabra").innerHTML = ""
        document.getElementById("letrasNo").innerHTML = ""
        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahorcado6.jpeg' alt='ahorcado6'>"
        errores=0
        aciertos=0
        for (var i = 0; i < letras.length; i++)
            document.getElementById(letras[i]).type = "visibility"
        document.getElementById("probar2").type = "visibility"

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

        document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahorcado" + errores + ".jpg' alt='ahorcado'" + errores +">"
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
    sortear_palabra()
    document.getElementById("probar2").type = "hidden"
    document.getElementById("cantidad_errores").innerHTML = "<img src='../img/ahorcado.jpg' alt='ahorcado'>"
}