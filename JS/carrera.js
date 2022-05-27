var reloj
var ganadas = 0

function empezar() {
  segundos = 60
  minutos = 2
  reloj_segundos = document.getElementById("segundos")
  reloj_minutos = document.getElementById("minutos")
  reloj = setInterval(function () {
      if (minutos == -1){
        swal("¡Felicitaciones!", "Ganaste " + ganadas + " partidas en 3 minutos", "success")
        clearInterval(reloj)
        reloj_segundos.innerHTML = "00"
        reloj_minutos.innerHTML = "3"
        segundos = 60
        minutos = 3
    }
      else if (segundos == 0) {
        segundos = 59
        minutos -=1
        reloj_minutos.innerHTML = minutos
    }
    segundos_para_imprimir=segundos.toString()
    if (segundos_para_imprimir.length == 1){
        reloj_minutos.innerHTML = minutos
        reloj_segundos.innerHTML = "0"+segundos
    }
    else{
        reloj_minutos.innerHTML = minutos
        reloj_segundos.innerHTML = segundos_para_imprimir
    }
    if (minutos==2 && segundos_para_imprimir == 60){
        reloj_minutos.innerHTML = "3"
        reloj_segundos.innerHTML = "00"
    }
    else if (segundos_para_imprimir == 60){
        reloj_minutos.innerHTML = minutos
        reloj_segundos.innerHTML = "00"
    }
    if (minutos==-1){
        reloj_minutos.innerHTML = "0"
        reloj_segundos.innerHTML = "00"
    }
    segundos -=1

}, 1000)
}
function boton_empezar(){
    empezar()
    document.getElementById("empezar").type = "hidden"
}
