
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


function alerta_exato(duration, display,msg_ativa=true) {
    var timer = duration, minutes, seconds;
    if (duration>0){
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        //display.textContent = "Sua próxima pausa será em: "+ minutes + ":" + seconds;
        if (--timer < 0) {
            //timer = duration;
            //display.textContent = "Acabou";
            if (msg_ativa == true){
                msg_alerta()
                msg_ativa = false
            }                        
        }
    }, 1000);
    }
}


function alerta_2m(duration, display,msg_ativa=true) {
    var timer = duration, minutes, seconds;
    if (duration>0){
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        //display.textContent = "Sua próxima pausa será em: "+ minutes + ":" + seconds;
        if (--timer < 0) {
            //timer = duration;
            //display.textContent = "Acabou";
            if (msg_ativa == true){
                falta_2min()
                msg_ativa = false
            }                        
        }
    }, 1000);
    }
}

function alerta_20m(duration, display,msg_ativa=true) {
    var timer = duration, minutes, seconds;
    if (duration>0){
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            //display.textContent = "Sua próxima pausa será em: "+ minutes + ":" + seconds;
            if (--timer < 0) {
                //timer = duration;
                //display.textContent = "Acabou";
                if (msg_ativa == true){
                    falta_20min()
                    msg_ativa = false
                }                        
            }
        }, 1000);
    }
}

window.onload = function (){

    display = document.querySelector('#timer'); // selecionando o timer
    //var duration = 60 * 5; // Converter para segundos    
    //startTimer(duration, display,contador_msg); // iniciando o timer
    
    var ativar = true; // Se true o alerta é exibido

    if ((tempo1!=null)||(tempo1>0)){
        alerta_exato(tempo1, display,ativar); // iniciando o timer
        alerta_2m(tempo1-120, display,ativar); // iniciando o timer 
    }
    if ((tempo2!=null)||(tempo2>0)){
        alerta_exato(tempo2, display,ativar); // iniciando o timer
        alerta_2m(tempo2-120, display,ativar); // iniciando o timer
        alerta_20m(tempo2-1200, display,ativar); // iniciando o timer
    }
    if ((tempo3!=null)||(tempo3>0)){
        alerta_exato(tempo3, display,ativar); // iniciando o timer                
        alerta_2m(tempo3-120, display,ativar); // iniciando o timer
    }


};




function msg_alerta(){

    window.alert("Sua pausa é agora!")
    

    Notification.requestPermission(/* opcional: callback */);
    
    var notification = new Notification("ALERTA", {
        icon: 'https://cdn-icons-png.flaticon.com/512/1648/1648302.png',
        body: "Hora de sair..."
    });
    notification.onclick = function() {
        //window.open("http://stackoverflow.com");
    }

}

function falta_2min(){
    
    window.alert("Faltam 2 minutos para sua pausa")
    Notification.requestPermission(/* opcional: callback */);
    
    var notification = new Notification("ALERTA", {
        icon: 'https://cdn-icons-png.flaticon.com/512/1648/1648302.png',
        body: "Faltam 2 minutos para sua pausa.\nOrganize seus atendimentos"
    });
    notification.onclick = function() {
        //window.open("http://stackoverflow.com");
    }

}

function falta_20min(){
    
    window.alert("Faltam 20 minutos para o seu intervalo")
    Notification.requestPermission(/* opcional: callback */);
    
    var notification = new Notification("ALERTA", {
        icon: 'https://cdn-icons-png.flaticon.com/512/1648/1648302.png',
        body: "Faltam 20 minutos para o seu intervalo.\nAtive a pré-pausa."
    });
    notification.onclick = function() {
        //window.open("http://stackoverflow.com");
    }

}
