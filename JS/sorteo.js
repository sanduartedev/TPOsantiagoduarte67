numero_sorteado=""
lista_mafia=[]
document.getElementById("alumnoSorteado").innerHTML += ""

function sorteo() {
    numero_sorteado = parseInt(Math.random()*lista_alumnos.length)
}
//var lista_alumnos= ["Juan Cruz", "Román", "Isaías" , "Agustín", "Brandon"]
var lista_alumnos= ["Juan Cruz", "Román", "Isaías" , "Agustín", "Brandon" , "Bianca" , "Lautaro" , "Adrián" , "Gianella" , "Fernando" , "Mía" , "Felipe" , "Tiziano" , "Luis" , "Azul" , "Yamila" , "Ronier" , "Thiago" , "Valeria" , "Valentina" , "Matías" , "Bruno" , "Valentín S." , "Julieta" , "Valentín Z."]
function cantidad_sorteos(){
    let cantidad_alumnos_a_sortear = document.getElementById("respuesta").value
    cantidad_alumnos_a_sortear = parseInt(cantidad_alumnos_a_sortear)
    if (cantidad_alumnos_a_sortear>lista_alumnos.length){
        document.getElementById("respuesta").value = ""
        swal("No hay tantos alumnos para sortear")
        document.getElementById("respuesta").value = ""
        cantidad_alumnos_a_sortear=0
    }
    
    for (var i = 1; i < cantidad_alumnos_a_sortear + 1; i++) {
        sorteo()
        document.getElementById("alumnoSorteado").innerHTML += "<b>Sorteo" + "&nbsp" + i + ":</b>" + "&nbsp" +  lista_alumnos[numero_sorteado] + "<br>"
        lista_alumnos.splice(numero_sorteado, 1)
}
}

var lista_alumnos_varones= ["Juan Cruz", "Román", "Isaías", "Agustín", "Brandon", "Lautaro", "Adrián", "Fernando", "Felipe", "Tiziano", "Luis", "Ronier", "Thiago", "Matías", "Bruno", "Valentín S.", "Valentín Z."]
var lista_alumnas= ["Bianca", "Gianella", "Mía", "Azul", "Yamila", "Valeria", "Valentina", "Julieta"]

function sorteoBancos(){
    document.getElementById("parejasParaBancos").innerHTML =" "
    for (var i = 1; i<14; i++) {
        if (lista_alumnas.length!=0){
            sorteo_numero_alumnes()
            document.getElementById("parejasParaBancos").innerHTML += "<b>Banco" + "&nbsp" +  i + ":</b>" + "&nbsp" + lista_alumnas[banco_sorteado_mujeres] + "&nbsp" +"con" + "&nbsp" + lista_alumnos_varones[banco_sorteado_varones] + "<br>"
            lista_alumnas.splice(banco_sorteado_mujeres, 1)
            lista_alumnos_varones.splice(banco_sorteado_varones, 1)
        }
        else if (lista_alumnos_varones.length==1){
                document.getElementById("parejasParaBancos").innerHTML += "<b>Banco" + "&nbsp" +  i + ":</b>" + "&nbsp" + lista_alumnos_varones[0] + "&nbsp" +"se sienta solo" + "<br>" + "<br>"
                lista_alumnos_varones= ["Juan Cruz", "Román", "Isaías", "Agustín", "Brandon", "Lautaro", "Adrián", "Fernando", "Felipe", "Tiziano", "Luis", "Ronier", "Thiago", "Matías", "Bruno", "Valentín S.", "Valentín Z."]
                lista_alumnas= ["Bianca", "Gianella", "Mía", "Azul", "Yamila", "Valeria", "Valentina", "Julieta"]
            }
            else{
                sorteo_numero_alumnes()
                document.getElementById("parejasParaBancos").innerHTML += "<b>Banco" + "&nbsp" +  i + ":</b>" + "&nbsp" + lista_alumnos_varones[banco_sorteado_varones] + "&nbsp" +"con" + "&nbsp"
                lista_alumnos_varones.splice(banco_sorteado_varones, 1)
                sorteo_numero_alumnes()
                document.getElementById("parejasParaBancos").innerHTML += lista_alumnos_varones[banco_sorteado_varones]+ "<br>"
                lista_alumnos_varones.splice(banco_sorteado_varones, 1)
            }
            function sorteo_numero_alumnes() {
                banco_sorteado_varones = parseInt(Math.random()*lista_alumnos_varones.length)
                banco_sorteado_mujeres = parseInt(Math.random()*lista_alumnas.length)
}    
}
}
function crear_alumnos(){
    cantidad_jugadores=25
    for (var i = 0; i<25; i++){
        document.getElementById("veinticinco_jugadores").innerHTML += "<input class='elegirAlumnos' id='alumno"+i+"' onClick='eliminar_alumno("+i+")' type='button' value='"+lista_alumnos[i]+"'>"
        lista_mafia.push(lista_alumnos[i])
    }
}
function eliminar_alumno(i){
    document.getElementById("alumno"+i).type = "hidden"
    lista_mafia[i]="ZZ"
}

function sortear_mafia(){
    var cantidad_ZZ=0
    for (var i = 0; i < lista_mafia.length; i++) {
        if (lista_mafia[i] == "ZZ"){
        cantidad_ZZ+=1}
    }
    cantidad_final_participantes=(lista_mafia.length)
    b=cantidad_final_participantes-cantidad_ZZ
    if (cantidad_final_participantes-cantidad_ZZ<12){
        swal("No puede jugarse a la Mafia porque se necesitan 12 participantes y son sólo " + b)
        document.getElementById("dios").removeChild()
        document.getElementById("medicos").removeChild()
        document.getElementById("ladrones").removeChild()
        document.getElementById("policias").removeChild()
        document.getElementById("paisanos").removeChild()
        document.getElementById("veinticinco_jugadores").removeChild()
    }
    
    numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
    while (lista_mafia[numero_sorteado_mafia] == "ZZ"){
        numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
    }
    document.getElementById("dios").innerHTML += lista_mafia[numero_sorteado_mafia]
    lista_mafia.splice(numero_sorteado_mafia, 1)
    cantidad_final_participantes-=1
    
    const cantidad_extraordinaria=parseInt(cantidad_final_participantes-cantidad_ZZ)/5
    
    for (var i = 0; i < (cantidad_extraordinaria); i++){
        numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        while (lista_mafia[numero_sorteado_mafia] == "ZZ"){
            numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        }
        document.getElementById("medicos").innerHTML += "<br>" + lista_mafia[numero_sorteado_mafia]
        lista_mafia.splice(numero_sorteado_mafia, 1)
        cantidad_final_participantes-=1
    }
    
    for (var i = 0; i < (cantidad_extraordinaria); i++){
        numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        while (lista_mafia[numero_sorteado_mafia] == "ZZ"){
            numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        }
        document.getElementById("ladrones").innerHTML += "<br>" + lista_mafia[numero_sorteado_mafia]
        lista_mafia.splice(numero_sorteado_mafia, 1)
        cantidad_final_participantes-=1
    }
    
    for (var i = 0; i < (cantidad_extraordinaria); i++){
        numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        while (lista_mafia[numero_sorteado_mafia] == "ZZ"){
            numero_sorteado_mafia = parseInt(Math.random()*cantidad_final_participantes)
        }
        document.getElementById("policias").innerHTML += "<br>" + lista_mafia[numero_sorteado_mafia]
        lista_mafia.splice(numero_sorteado_mafia, 1)
        cantidad_final_participantes-=1
    }

    a=0
    for (var i = 0; i<cantidad_final_participantes; i++){
        
        if (lista_mafia[i] == "ZZ"){
            continue
        }
        else{
            a+=1
            document.getElementById("paisanos").innerHTML +=  "<br>" + a +"-"+ "&nbsp"+ lista_mafia[i]+ "&nbsp"
    }
    }
}