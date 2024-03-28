

var mensagens_monitoradas = document.getElementById("mensagens_monitoradas")

// Campos de interesse
var protocolo_chat = window.document.getElementById("protocolo_chat")
var protocolo_adm = window.document.getElementById("protocolo_adm")
var nome_cliente = window.document.getElementById("nome_cliente")
var telefone = window.document.getElementById("telefone")
var bfp = window.document.getElementById("bfp")
var descricao = window.document.getElementById("descricao")
var h_preferencia = window.document.getElementById("h_preferencia")
var ponto_referencia = window.document.getElementById("ponto_referencia")

// function monitorador(){
//     var msg = ""
    
//     if ((descricao.value.includes("cance"))||(descricao.value.includes("reten")||(descricao.value.includes("reativ")))) {
//         msg = `❗Cadastros <b>TP</b> não são tratados pela Retenção!`
//         msg_monitorador(msg)
//     }

//     if (descricao.value.includes("'")) {
//          msg = "Identificado o caractere ' em uso, <br>o ADM não permite para salvar o protocolo!"        
//          msg_monitorador(msg)
//     }
//     if ((descricao.value.includes("reais"))||(descricao.value.includes("R$")||(descricao.value.includes("$")))) {
//         msg = "Tenha atenção as informações sobre valores anexados!"        
//         msg_monitorador(msg)
//     }
//     if (descricao.value.includes("/C:/Users")) {
//         msg = "Identificamos um link de comprovante/foto inválido!<br>Copie o link do Omini."        
//         msg_monitorador(msg)
//     }
//     if (descricao.value.includes("sete dias úteis")||descricao.value.includes("7 dias úteis")||descricao.value.includes("7 dias")||descricao.value.includes("sete dias")) {
//         msg = "Possível protocolo de serviço👷🏻!<br>▶️Verifique se a visita foi encaminhada com valor correto.<br>▶️Veja se o cliente não possui pontos adicionais!"        
//         msg_monitorador(msg)
//     }
//     if (descricao.value.includes("campinas")||descricao.value.includes("Campinas")) {
//         msg = "Cidade de Campinas!<br> Esta cidade não tem grupo específico, é usado SupAmparo."        
//         msg_monitorador(msg)
//     }
//     // if (descricao.value.includes("PED.")&&(!(descricao.value.includes("fasternet.matrixdobrasil.ai")))) {
//     //     msg = "Anexe a foto do cliente segurando o documento com foto<br>🎴🧔🤳."        
//     //     msg_monitorador(msg)
//     // }
//     if ((descricao.value.includes("IPTV"))||(descricao.value.includes("iptv"))) {
//         msg = "📺🏴‍☠️IPTV - Anexe a TAG IPTV no OMINI ."        
//         msg_monitorador(msg)
//     }
//     if ((descricao.value.includes("rádio")||descricao.value.includes("Rádio")||descricao.value.includes("base")||descricao.value.includes("NS")||descricao.value.includes("torre")||descricao.value.includes("radio")||descricao.value.includes("Radio"))&&(bfp.value.includes("Padrão Fibra"))) {
//         msg = "📡 Possível cliente Rádio detectado.<br>Necessário mudar a BFP do cliente."        
//         msg_monitorador(msg)
//     }

//     if ((h_preferencia.value!=="")||(ponto_referencia.value!=="")){
//         msg = "Visita técnica detectada👷🏻!<br>▶️Verifique se a visita foi enviada corretamente.<br>▶️Verifique se o grupo está correto."        
//         msg_monitorador(msg)
//     }

//     // quando não tem mais texto
//     if (descricao.value == "") {
//         mensagens_monitoradas.innerHTML= ""
//     }

// }

// function msg_monitorador(msg){

//     var texto = `<div class="alert alert-warning alert-dismissible fade show" role="alert" style="margin: 5px">
//                     <strong>                            
//                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/></svg>
//                     Olá! 
//                     </strong> <br>
//                     ${msg}
//                     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 `
    
//     if (mensagens_monitoradas.innerHTML.includes(msg)){
//         // console.log("Alerta já existe!")
//     } else {
//             mensagens_monitoradas.innerHTML+= texto
//     }

// }

function monitorador(){
    var msg = ""
    
    if ((descricao.value.includes("cance"))||(descricao.value.includes("reten")||(descricao.value.includes("reativ")))) {
        msg = `❗Cadastros <b>TP</b> não são tratados pela Retenção!`
        msg_monitorador(msg)
    }

    if (descricao.value.includes("'")) {
         msg = "Identificado o caractere ' em uso, \no ADM não permite para salvar o protocolo!"        
         msg_monitorador(msg)
    }
    if ((descricao.value.includes("reais"))||(descricao.value.includes("R$")||(descricao.value.includes("$")))) {
        msg = "Tenha atenção as informações sobre valores anexados!"        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("/C:/Users")) {
        msg = "Identificamos um link de comprovante/foto inválido!\nCopie o link do Omini."        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("sete dias úteis")||descricao.value.includes("7 dias úteis")||descricao.value.includes("7 dias")||descricao.value.includes("sete dias")) {
        msg = "Possível protocolo de serviço👷🏻!\n▶️Verifique se a visita foi encaminhada com valor correto.\n▶️Veja se o cliente não possui pontos adicionais!"        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("campinas")||descricao.value.includes("Campinas")) {
        msg = "Cidade de Campinas!\n Esta cidade não tem grupo específico, é usado SupAmparo."        
        msg_monitorador(msg)
    }
    // if (descricao.value.includes("PED.")&&(!(descricao.value.includes("fasternet.matrixdobrasil.ai")))) {
    //     msg = "Anexe a foto do cliente segurando o documento com foto\n🎴🧔🤳."        
    //     msg_monitorador(msg)
    // }
    if ((descricao.value.includes("IPTV"))||(descricao.value.includes("iptv"))) {
        msg = "📺🏴‍☠️IPTV - Anexe a TAG IPTV no OMINI ."        
        msg_monitorador(msg)
    }
    if ((descricao.value.includes("rádio")||descricao.value.includes("Rádio")||descricao.value.includes("base")||descricao.value.includes("NS")||descricao.value.includes("torre")||descricao.value.includes("radio")||descricao.value.includes("Radio"))&&(bfp.value.includes("Padrão Fibra"))) {
        msg = "📡 Possível cliente Rádio detectado.\nNecessário mudar a BFP do cliente."        
        msg_monitorador(msg)
    }

    if ((h_preferencia.value!=="")||(ponto_referencia.value!=="")){
        msg = "Visita técnica detectada👷🏻!\n▶️Verifique se a visita foi enviada corretamente.\n▶️Verifique se o grupo está correto."        
        msg_monitorador(msg)
    }

    // quando não tem mais texto
    if (descricao.value == "") {
        mensagens_monitoradas.innerHTML= ""
    }

}

function msg_monitorador(msg){
        
    var chave = window.location.hash;
    //console.log(chave)

    // Verificar se a chave já existe no localStorage
    if (!localStorage.getItem(chave)) {

    }else{
        // // Se existir, configurar o valor padrão para a chave
        // var msg_antigas = `${localStorage.getItem(chave)},${msg}`
        // //console.log(localStorage.getItem(chave))
        // localStorage.setItem(chave, msg_antigas)

        // Verificando se a msg já foi acionada
        if (localStorage.getItem(chave).includes(msg)) {
            
        } else {            
            var msg_antigas = `${localStorage.getItem(chave)},${msg}`            
            localStorage.setItem(chave, msg_antigas)
            Toastify({
                text: `🐳\n${msg}`,
                close: true,                
                duration: 5000            
            }).showToast();    
        }
    }

    // Toastify({

    //     text: `🐳\n${msg}`,
    //     close: true,
        
    //     duration: 3000
    
    // }).showToast();            

}

$('body').mouseleave(function(){
    monitorador()
    window.location.hash = nome_cliente.value
    var fragmentoUrl = window.location.hash;
    verificarEConfigurarLocalStorage(fragmentoUrl, "")
})

// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "left", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },
//     onClick: function(){} // Callback after click
//   }).showToast();


Toastify({

    text: "🐳\nBem vindo!",

    duration: 3000

}).showToast();


function verificarEConfigurarLocalStorage(chave, valorPadrao) {
    // Verificar se a chave já existe no localStorage
    if (!localStorage.getItem(chave)) {
        // Se não existir, configurar o valor padrão para a chave
        localStorage.setItem(chave, JSON.stringify(valorPadrao));
    }
}
