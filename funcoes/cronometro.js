function cronometro(hora_p) {
    
    var horas = parseInt(hora_p.substring(0,2))
    var minutos = parseInt(hora_p.substring(3,5))

    //var horas = 0;
    //var minutos = 0;
    var segundos = 0;
  
    const tempo = setInterval(() => {
      segundos++;
  
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }
  
      if (minutos === 60) {
        horas++;
        minutos = 0;
      }
  
      console.log(`${horas}:${minutos}:${segundos}`);
    }, 1000);
  }
  
  // Exemplo de uso:
  //cronometro();
  