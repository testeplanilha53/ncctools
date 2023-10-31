var pausa_1 = localStorage.getItem('txt_key_pausa_1')
var intervalo = localStorage.getItem('txt_intervalo')
var pausa_2 = localStorage.getItem('txt_pausa_2') // fica no formato 00:00

// o horário do intervalo teoriacamente deve ser sempre maior que a hora atual

var agora = new Date()//pega o "tempo" atual

/*
// FUNÇAO PARA CONVERTER TUDO EM SEGUNDOS
function converter_segundos(tempo){
    var hora = tempo.getHours() // Pega a hora
    var min = tempo.getMinutes()// Pega os minutos    
    tempo = hora*60*60 + min*60 // transforma tudo em segundos
    return tempo
}*/

// FUNÇAO PARA CONVERTER TUDO EM SEGUNDOS
function converter_segundos(tempo){
  var hora = tempo.getHours() // Pega a hora
  var min = tempo.getMinutes()// Pega os minutos    
  var segundos = tempo.getSeconds()	// pega os segundos
  tempo = hora*60*60 + min*60 +segundos // transforma tudo em segundos
  return tempo
}

function converter_segundos_string(pausa){
    var hora = pausa.substring(0,2)
    var min = pausa.substring(3,5)
    pausa = hora*60*60 + min*60 // transforma tudo em segundos
    return pausa
}


// CALCULA QUANDO TEMPO FALTA ATÉ A PAUSA EM SEGUNDOS
var tempo1 = converter_segundos_string(pausa_1) - converter_segundos(agora)
var tempo2 = converter_segundos_string(intervalo) - converter_segundos(agora)
var tempo3 = converter_segundos_string(pausa_2) - converter_segundos(agora)



  // Exemplo de uso:
  var campo_timer1 = document.getElementById("cronometro_pausas1")  
  var campo_timer2 = document.getElementById("cronometro_pausas2")  
  var campo_timer3 = document.getElementById("cronometro_pausas3")  

  var button_clock1 = document.getElementById("button_clock1")  
  var button_clock2 = document.getElementById("button_clock2")  
  var button_clock3 = document.getElementById("button_clock3")  

  cronometroDecrescente(tempo1,campo_timer1,button_clock1); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  notifPendenciaPausa(tempo1,campo_timer1,button_clock1); // Notificação ao retornar

  cronometroDecrescenteIntervalo(tempo2,campo_timer2,button_clock2); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  notifPendenciaPausa(tempo2,campo_timer2,button_clock2); // Notificação ao retornar

  cronometroDecrescente(tempo3,campo_timer3,button_clock3); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  notifPendenciaPausa(tempo3,campo_timer3,button_clock3); // Notificação ao retornar


  function cronometroDecrescente(segundos,campo_timer,button_clock) {    
    var intervalo = setInterval(() => {
              
      var horas = Math.floor(segundos / 3600);
      var minutos = Math.floor((segundos % 3600) / 60);
      var segundosRestantes = segundos % 60;
  
      var formatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      //console.log(formatado);
                  
      if ((minutos <= 10)&&(horas == 0)) {
        button_clock.innerHTML = `<button  class="btn btn-outline-light clock_new" data-toggle="tooltip" data-placement="top" title="Cronometro para a próxima pausa!"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16"> <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/> <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/> </svg> <span id="cronometro_pausas1"> ${formatado} </span> </button>`
        //campo_timer.innerHTML = `${formatado}`        
      }      
      
      if (segundos <= 0) {
        clearInterval(intervalo);
        button_clock.innerHTML=``                
      }
  
      segundos--;
    }, 1000);
  }

  function cronometroDecrescenteIntervalo(segundos,campo_timer,button_clock) {    
    var intervalo = setInterval(() => {
              
      var horas = Math.floor(segundos / 3600);
      var minutos = Math.floor((segundos % 3600) / 60);
      var segundosRestantes = segundos % 60;
  
      var formatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      //console.log(formatado);
                  
      if ((minutos <= 10)&&(horas == 0)) {
        button_clock.innerHTML = `<button  class="btn btn-outline-light clock_new " data-toggle="tooltip" data-placement="top" title="Cronometro para a próxima pausa!"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16"> <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/> <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/> </svg> <span id="cronometro_pausas1"> ${formatado}  🚨 Notifique o(a) monitor(a) se precisar transferir 🚨 </span> </button>`
        //campo_timer.innerHTML = `${formatado}`        
      }      
      
      if (segundos <= 0) {
        clearInterval(intervalo);
        button_clock.innerHTML=``                
      }
  
      segundos--;
    }, 1000);
  }



  // Notificação para lembrar de retirar os clientes da pendência e retirar da pausa
  function notifPendenciaPausa(segundos,campo_timer,button_clock) {    
    segundos +=840 // adicionando + 14minutos
    var intervalo = setInterval(() => {
              
      var horas = Math.floor(segundos / 3600);
      var minutos = Math.floor((segundos % 3600) / 60);
      var segundosRestantes = segundos % 60;
  
      var formatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      //console.log(formatado);
                  
      if ((minutos <= 5)&&(horas == 0)) {
        button_clock.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    Lembre-se de resgatar os atendimentos e retirar da pausa.
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  `
        //campo_timer.innerHTML = `${formatado}`        
      }      
      
      if (segundos <= 0) {
        clearInterval(intervalo);
        button_clock.innerHTML=``                
      }
  
      segundos--;
    }, 1000);
  }
