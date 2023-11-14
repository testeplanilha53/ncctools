

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

function monitorador(){
    var msg = ""
    
    if (descricao.value.includes("'")) {
         msg = "Identificado o caractere ' em uso, <br>o ADM não permite para salvar o protocolo!"        
         msg_monitorador(msg)
    }
    if ((descricao.value.includes("reais"))||(descricao.value.includes("R$")||(descricao.value.includes("$")))) {
        msg = "Tenha atenção as informações sobre valores anexados!"        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("/C:/Users")) {
        msg = "Identificamos um link de comprovante/foto inválido!<br>Copie o link do Omini."        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("sete dias úteis")||descricao.value.includes("7 dias úteis")||descricao.value.includes("7 dias")||descricao.value.includes("sete dias")) {
        msg = "Possível protocolo de serviço!<br>Verifique se a visita foi encaminhada para o grupo correto e com valor correto.<br> Veja se o cliente não possui pontos adicionais!"        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("campinas")||descricao.value.includes("Campinas")) {
        msg = "Cidade de Campinas!<br> Esta cidade não tem grupo específico, é usado SupAmparo."        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("PED.")) {
        msg = "Anexe a foto do cliente segurando o documento com foto<br>🎴🧔🤳."        
        msg_monitorador(msg)
    }

    // quando não tem mais texto
    if (descricao.value == "") {
        mensagens_monitoradas.innerHTML= ""
    }

}

function msg_monitorador(msg){

    var texto = `<div class="alert alert-warning alert-dismissible fade show" role="alert" style="margin: 5px">
                    <strong>                            
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/></svg>
                    Olá! 
                    </strong> <br>
                    ${msg}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
    
    if (mensagens_monitoradas.innerHTML.includes(msg)){
        // console.log("Alerta já existe!")
    } else {
            mensagens_monitoradas.innerHTML+= texto
    }

}