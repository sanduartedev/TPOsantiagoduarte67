jugada_yo=""
partidas=0
partidas_ganadas_yo=0
partidas_ganadas_pc=0
empatadas=0
nro_ganadas=5

document.getElementById("partidas").innerHTML = "&nbsp" + partidas
document.getElementById("ganadas_pc").innerHTML = "&nbsp" + partidas_ganadas_pc
document.getElementById("ganadas_yo").innerHTML = "&nbsp" + partidas_ganadas_yo
document.getElementById("empatadas").innerHTML = "&nbsp" + empatadas
        
function resultado(jugada_yo){
    if (jugada_yo == 1){
        jugada_pc=2
        document.getElementById("jugada_yo").innerHTML = "<i id='piedra_derecha' class='fa-solid fa-hand-back-fist fa-2x'></i>"
        document.getElementById("jugada_pc").innerHTML = "<i id='papel_izquierda' class='fa-solid fa-hand fa-2x'></i>"
    }
    else if (jugada_yo == 2){
        document.getElementById("jugada_yo").innerHTML = "<i id='papel_derecha' class='fa-solid fa-hand fa-2x'></i>"
        document.getElementById("jugada_pc").innerHTML = "<i id='tijera_izquierda' class='fa-solid fa-hand-scissors fa-2x'></i>"
    }
    else if (jugada_yo == 3){
        document.getElementById("jugada_yo").innerHTML = "<i id='tijera_derecha' class='fa-solid fa-hand-scissors fa-2x'></i>"
        document.getElementById("jugada_pc").innerHTML = "<i id='piedra_izquierda' class='fa-solid fa-hand-back-fist fa-2x'></i>"
    }
    if (jugada_yo == 1){
        document.getElementById("jugada_yo").innerHTML = "<i id='piedra_derecha' class='fa-solid fa-hand-back-fist fa-2x'></i>"
    }
    else if (jugada_yo == 2){
        document.getElementById("jugada_yo").innerHTML = "<i id='papel_derecha' class='fa-solid fa-hand fa-2x'></i>"
    }
    else if (jugada_yo == 3){
        document.getElementById("jugada_yo").innerHTML = "<i id='tijera_derecha' class='fa-solid fa-hand-scissors fa-2x'></i>"
    }
    if (jugada_yo=1){
        jugada_pc=2
        partidas_ganadas_pc+=1
        partidas+=1
        document.getElementById("partidas").innerHTML = "&nbsp" + partidas
        document.getElementById("ganadas_pc").innerHTML = "&nbsp" + partidas_ganadas_pc
    }
    else if (jugada_yo==2){
        jugada_pc=3
        partidas_ganadas_pc+=1
        partidas+=1
        document.getElementById("partidas").innerHTML = "&nbsp" + partidas
        document.getElementById("ganadas_pc").innerHTML = "&nbsp" + partidas_ganadas_pc
    }
    else if (jugada_yo==3){
        jugada_pc=1
        partidas_ganadas_pc+=1
        partidas+=1
        document.getElementById("partidas").innerHTML = "&nbsp" + partidas
        document.getElementById("ganadas_pc").innerHTML = "&nbsp" + partidas_ganadas_pc
    }
    cargar_nro_ganadas()
    setTimeout(function(){ 
        document.getElementById("jugada_pc").innerHTML = "<i id='pregunta_inicial' class='fa-solid fa-circle-question fa-2x'></i>"
        document.getElementById("jugada_yo").innerHTML = "<i id='pregunta_inicial' class='fa-solid fa-circle-question fa-2x'></i>"
        ganar()
    }, 1500);
    if (partidas!=0){
        swal("Tú: " + partidas_ganadas_yo + " vs. Rival: " + partidas_ganadas_pc)
    }
}
function cargar_nro_ganadas(){
    nro_ganadas = document.getElementById("respuesta").value
}
function ganar(){
    if (partidas_ganadas_yo == nro_ganadas){
        swal("¡Ganaste!")
        fin()
    }
    else if (partidas_ganadas_pc == nro_ganadas){
        swal("Perdiste :(")
        fin()
    }
}
function fin(){
    partidas=0
    partidas_ganadas_pc=0
    empatadas=0
    partidas_ganadas_yo=0
    document.getElementById("partidas").innerHTML = "&nbsp" + partidas
    document.getElementById("ganadas_pc").innerHTML = "&nbsp" + partidas_ganadas_pc
    document.getElementById("ganadas_yo").innerHTML = "&nbsp" + partidas_ganadas_yo
    document.getElementById("empatadas").innerHTML = "&nbsp" + empatadas
    document.getElementById("jugada_pc").innerHTML = "<i id='pregunta_inicial' class='fa-solid fa-circle-question fa-2x'></i>"
    document.getElementById("jugada_yo").innerHTML = "<i id='pregunta_inicial' class='fa-solid fa-circle-question fa-2x'></i>"
}