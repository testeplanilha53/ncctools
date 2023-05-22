var pausa_1 = localStorage.getItem('txt_key_pausa_1')
var intervalo = localStorage.getItem('txt_intervalo')
var pausa_2 = localStorage.getItem('txt_pausa_2') // fica no formato 00:00

// o horário do intervalo teoriacamente deve ser sempre maior que a hora atual

var agora = new Date()//pega o "tempo" atual

// FUNÇAO PARA CONVERTER TUDO EM SEGUNDOS
function converter_segundos(tempo){
    var hora = tempo.getHours() // Pega a hora
    var min = tempo.getMinutes()// Pega os minutos
    tempo = hora*60*60 + min*60 // transforma tudo em segundos
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
  cronometroDecrescente(tempo2,campo_timer2,button_clock2); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  cronometroDecrescente(tempo3,campo_timer3,button_clock3); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  
function cronometroDecrescente(segundos,campo_timer,button_clock) {    
    var intervalo = setInterval(() => {
              
      var horas = Math.floor(segundos / 3600);
      var minutos = Math.floor((segundos % 3600) / 60);
      var segundosRestantes = segundos % 60;
  
      var formatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      console.log(formatado);
            
      //campo_timer.innerHTML = `<button class="btn btn-outline-light" data-toggle="tooltip" data-placement="top" title="Cronometro para a próxima pausa"> ${formatado} </button>`        
      campo_timer.innerHTML = `${formatado}`        
      
      if (segundos <= 0) {
        clearInterval(intervalo);
        formatado = `--:--`
        campo_timer.innerHTML = `${formatado}`   
        button_clock.innerHTML=``
        console.log(formatado);
        console.log("Tempo esgotado!");        
      }

      //campo_timer.innerHtml = `<button class="btn btn-outline-light" data-toggle="tooltip" data-placement="top" title="Cronometro para a próxima pausa"> ${formatado} </button>`      
      //campo_timer.innerHTML = `<button class="btn btn-outline-light"> teste </button>` 
  
      segundos--;
    }, 1000);
  }
  

  