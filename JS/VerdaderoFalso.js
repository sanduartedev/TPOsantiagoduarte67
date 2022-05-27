var p1=0
var p2=0
var p3=0
var p4=0
var p5=0
var p6=0
var p7=0
var p8a=0
var p8b=0
var p8c=0
var p9=0
var p10=0
var nota=0
          
function resultado() {
    if (document.getElementById('p11').checked==true) {
        p1=1
    }
    else {
        p1=-1
    }
    if (document.getElementById('p21').checked==true && document.getElementById('p22').checked==true && document.getElementById('p23').checked==true) {
        p2=1
    }
    else if (document.getElementById('p21').checked==true && document.getElementById('p22').checked==true || document.getElementById('p21').checked==true && document.getElementById('p23').checked==true || document.getElementById('p23').checked==true && document.getElementById('p22').checked==true) {
        p2=0.66
    }
    else if (document.getElementById('p21').checked==true || document.getElementById('p22').checked==true || document.getElementById('p23').checked==true) {
        p2=0.33
    }
    else {
        p2=-1
    }
    if (document.getElementById('p33').checked==true && document.getElementById('p35').checked==true) {
        p3=1
    }
    else if (document.getElementById('p33').checked==true || document.getElementById('p35').checked==true) {
        p3=0.5
    }
    else {
        p3=-1
    }
    if (document.getElementById('p41').checked==true && document.getElementById('p44').checked==true) {
        p4=1
    }
    else if (document.getElementById('p41').checked==true || document.getElementById('p44').checked==true) {
        p4=0.5
    }
    else {
        p4=-1
    }
    if (document.getElementById('p52').checked==true && document.getElementById('p55').checked==true) {
        p5=1
    }
    else if (document.getElementById('p52').checked==true || document.getElementById('p55').checked==true) {
        p5=0.5
    }
    else {
        p5=-1
    }
    if (document.getElementById('p61').checked==true && document.getElementById('p63').checked==true && document.getElementById('p65').checked==true && document.getElementById('p66').checked==true) {
        p6=1
    }
    //VEr cuatro respuestas correctaelse if (document.getElementById('p52').checked==true || document.getElementById('p55').checked==true) {
    //    p6=0.5
    else {
        p6=-1
    }
    if (document.getElementById('p75').checked==true) {
        p7=1
    }
    else {
        p7=-1
    }
    if (document.getElementById('p81').checked==true){ 
    //&& document.getElementById('p84').checked==true && document.getElementById('p86').checked==true) {
        p8a=0.3
    }
    else {
        p8a=-0.3
    }
    if (document.getElementById('p84').checked==true){ 
        p8b=0.3
    }
    else {
        p8b=-0.3
    }
    if (document.getElementById('p86').checked==true){ 
        p8c=0.4
    }
    else {
        p8c=-0.4
    }
    
        


    if (document.getElementById('p91').checked==true && document.getElementById('p92').checked==true && document.getElementById('p93').checked==true && document.getElementById('p94').checked==true) {
        p9=1
    }
    //VEr cuatro respuestas correctaelse if (document.getElementById('p81').checked==true && document.getElementById('p84').checked==true || document.getElementById('p81').checked==true && document.getElementById('p86').checked==true || document.getElementById('p84').checked==true && document.getElementById('p86').checked==true) {
    //    p2=0.66
    //}
    //else if (document.getElementById('p81').checked==true || document.getElementById('p84').checked==true || document.getElementById('p86').checked==true) {
    //    p2=0.33
    //}
    else {
       p9=-1
    }
    if (document.getElementById('p94').checked==true) {
        p10=1
    }
    else {
        p10=-1
    }

nota=p1+p2+p3+p4+p5+p6+p7+p8a+p8b+p8c+p9+p10
swal("Nota: ", "Tu nota es: " + nota, "success")
document.getElementById("respuestaCorrecta1").style.color = "white" 
document.getElementById("respuestaCorrecta2a").style.color = "white" 
document.getElementById("respuestaCorrecta2b").style.color = "white" 
document.getElementById("respuestaCorrecta2c").style.color = "white" 
document.getElementById("respuestaCorrecta3a").style.color = "white" 
document.getElementById("respuestaCorrecta3b").style.color = "white" 
document.getElementById("respuestaCorrecta4a").style.color = "white" 
document.getElementById("respuestaCorrecta4b").style.color = "white" 
document.getElementById("respuestaCorrecta5a").style.color = "white" 
document.getElementById("respuestaCorrecta5b").style.color = "white" 
document.getElementById("respuestaCorrecta6a").style.color = "white" 
document.getElementById("respuestaCorrecta6b").style.color = "white" 
document.getElementById("respuestaCorrecta6c").style.color = "white" 
document.getElementById("respuestaCorrecta6d").style.color = "white" 
document.getElementById("respuestaCorrecta7").style.color = "white" 
document.getElementById("respuestaCorrecta8a").style.color = "white" 
document.getElementById("respuestaCorrecta8b").style.color = "white" 
document.getElementById("respuestaCorrecta8c").style.color = "white" 
document.getElementById("respuestaCorrecta9a").style.color = "white" 
document.getElementById("respuestaCorrecta9b").style.color = "white" 
document.getElementById("respuestaCorrecta9c").style.color = "white" 
document.getElementById("respuestaCorrecta9d").style.color = "white" 
document.getElementById("respuestaCorrecta10").style.color = "white" 
document.getElementById("respuestaCorrecta1").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta2a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta2b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta2c").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta3a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta3b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta4a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta4b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta5a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta5b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta6a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta6b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta6c").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta6d").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta7").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta8a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta8b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta8c").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta9a").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta9b").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta9c").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta9d").style.backgroundColor = "green" 
document.getElementById("respuestaCorrecta10").style.backgroundColor = "green" 
}
