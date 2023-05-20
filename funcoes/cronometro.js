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


  
function cronometroDecrescente(segundos) {
    const intervalo = setInterval(() => {
      const horas = Math.floor(segundos / 3600);
      const minutos = Math.floor((segundos % 3600) / 60);
      const segundosRestantes = segundos % 60;
  
      const formatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      console.log(formatado);
      window.documento.getElement
  
      if (segundos <= 0) {
        clearInterval(intervalo);
        console.log("Tempo esgotado!");
      }
  
      segundos--;
    }, 1000);
  }
  
  // Exemplo de uso:
  cronometroDecrescente(tempo1); // Inicia o cronômetro decrescente com 3665 segundos (1 hora, 1 minuto e 5 segundos)
  