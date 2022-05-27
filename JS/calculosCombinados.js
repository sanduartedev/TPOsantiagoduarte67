var cantidadDeRespondidas=0
var cantidadDeCorrectas=0
var cantidadDeIncorrectas=0 

const getValueInput = () =>{
    let inputValue = document.getElementById("respuesta").value; 
    if (inputValue==(25*4-48/3+4)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }
}
const getValueInput2 = () =>{
    let inputValue2 = document.getElementById("respuesta2").value; 
    if (inputValue2==(20*5-9*9+24-10)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue2+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue2+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput3 = () =>{
    let inputValue3 = document.getElementById("respuesta3").value; 
    if (inputValue3==(40/5+24/6+7*6)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue3+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue3+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput4 = () =>{
    let inputValue4 = document.getElementById("respuesta4").value; 
    if (inputValue4==(60-45/5-49/7)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue4+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue4+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput5 = () =>{
    let inputValue5 = document.getElementById("respuesta5").value; 
    if (inputValue5==(54/3+18-36/4-12)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue5+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue5+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput6 = () =>{
    let inputValue6 = document.getElementById("respuesta6").value; 
    if (inputValue6==((10+8)/3+3)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue6+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue6+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput7 = () =>{
    let inputValue7 = document.getElementById("respuesta7").value; 
    if (inputValue7==(14-2*(12-5))){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue7+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue7+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput8 = () =>{
    let inputValue8 = document.getElementById("respuesta8").value; 
    if (inputValue8==5*6-3*(3+4)){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue8+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue8+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput9 = () =>{
    let inputValue9 = document.getElementById("respuesta9").value; 
    if (inputValue9==(13-1)/4+24){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue9+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue9+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}
const getValueInput10 = () =>{
    let inputValue10 = document.getElementById("respuesta10").value; 
    if (inputValue10==((10/2+41)-(17*3-32))){
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue10+ '" es correcta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeCorrectas=cantidadDeCorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadCorrectas").innerHTML = "Respondiste " + cantidadDeCorrectas+ " correctamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);        
    }
    else{
        document.getElementById("valueInput").innerHTML = 'Tu respuesta "' + inputValue10+ '" es incorrecta';
        cantidadDeRespondidas=cantidadDeRespondidas+1
        cantidadDeIncorrectas=cantidadDeIncorrectas+1
        document.getElementById("cantidadRespondidas").innerHTML = "Respondiste " + cantidadDeRespondidas+ " ejercicios || ";
        document.getElementById("cantidadIncorrectas").innerHTML = "Respondiste " + cantidadDeIncorrectas+ " incorrectamente || ";
        document.getElementById("nota").innerHTML = "Tu nota es: " + (cantidadDeCorrectas / cantidadDeRespondidas * 10).toFixed(2);
    }  
}