

localStorage.setItem('V_transf', "0");
localStorage.setItem('V_transf_tv', "0");
localStorage.setItem('V_transf_wifi', "0");

atualizar_valor_total()
atualizar_parcelas()

function valor_transferência(valor){
    localStorage.setItem('V_transf', valor);
    atualizar_valor_total()
    atualizar_parcelas()
    verificar_amparo()
}

function valor_tv(){
    localStorage.setItem('V_transf_tv', 25*window.document.getElementById("v_tv").value);
    atualizar_valor_total()
    atualizar_parcelas()
    verificar_amparo()
}

function valor_wifi(){
    localStorage.setItem('V_transf_wifi', 25*window.document.getElementById("v_wifi").value);
    atualizar_valor_total()
    atualizar_parcelas()
    verificar_amparo()
}



function atualizar_valor_total(){    
    var v_total = parseInt(localStorage.getItem('V_transf')) +
                  parseInt(localStorage.getItem('V_transf_tv')) +
                  parseInt(localStorage.getItem('V_transf_wifi'))
    
    window.document.getElementById("valor_total").innerText = v_total
    window.document.getElementById("num_parcelas").value = 1

    var parcelas_max = parseInt(v_total/25);
    if (parcelas_max>0){
        window.document.getElementById("num_parcelas").max = parcelas_max
        window.document.getElementById("parcelas2").innerText = parcelas_max
    }else{
        window.document.getElementById("num_parcelas").max = 1
        window.document.getElementById("parcelas2").innerText = 1
    }
    
}


function atualizar_parcelas(){    
    window.document.getElementById("parcelas").innerText = window.document.getElementById("num_parcelas").value        
}


// Verificando o caso especial de Amparo que o valor de R$100,00 só parcela em 2x
function verificar_amparo(){
    var V_transf = parseInt(localStorage.getItem('V_transf'))
    var V_transf_tv = parseInt(localStorage.getItem('V_transf_tv'))
    var V_transf_wifi = parseInt(localStorage.getItem('V_transf_wifi'))
    
    if ((V_transf==100)&&(V_transf_tv==V_transf_wifi)&&(V_transf_wifi==0)){
        window.document.getElementById("num_parcelas").max = 2
        window.document.getElementById("parcelas2").innerText = 2
    }

}

function inserir_modelo_transferencia(){
    var valor_total =   parseInt(localStorage.getItem('V_transf')) +
                        parseInt(localStorage.getItem('V_transf_tv')) +
                        parseInt(localStorage.getItem('V_transf_wifi'))
    var parcelas = window.document.getElementById("num_parcelas").value
    var novo_endereco = window.document.getElementById("novo_endereco").value
    var confirmacao_disponibilidade = window.document.getElementById("confirmacao_disponibilidade").value
    var V_transf = parseInt(localStorage.getItem('V_transf'))
    var v_tv = window.document.getElementById("v_tv").value
    var v_wifi = window.document.getElementById("v_wifi").value

    // var texto = `Cliente solicita transferência de endereço para:
    //              <hr> <b> Novo endereço:</b> ${novo_endereco} <hr>
    //              1 x R$${V_transf},00 -- ponto principal<br> \n
    //              ${v_tv} x R$25,00 -- ponto adc. TV<br> \n
    //              ${v_wifi} x R$25,00 -- ponto adc. WI-FI<br> \n
    //              <b>VALOR TOTAL: R$${valor_total} em ${parcelas} vez(es)</b>\n
    //              <hr>
    //              Ciente do prazo máximo de 7 dias úteis, e que é necessário levar os dispositivos ao novo endereço.                  
    //              <hr> Confirmada a disponibilidade de conexão no local por: ${confirmacao_disponibilidade}
    //             `

    // var texto = `Cliente solicita transferência de endereço para: <hr>\n<b> Novo endereço:</b> ${novo_endereco} <hr>\n1 x R$${V_transf},00 -- ponto principal<br> \n${v_tv} x R$25,00 -- ponto adc. TV<br> \n${v_wifi} x R$25,00 -- ponto adc. WI-FI<br> \n<b>VALOR TOTAL: R$${valor_total} EM ${plural_parcelas(parcelas)}</b>\n<hr> Ciente do prazo máximo de 7 dias úteis, e que é necessário levar os dispositivos ao novo endereço. \n<hr> Confirmada a disponibilidade de conexão no local por: \n${confirmacao_disponibilidade}`
    var texto = `Cliente solicita transferência de endereço para: <hr>\n<b> Novo endereço:</b> ${novo_endereco} <hr>\n1 x R$${V_transf},00 -- ponto principal\n${v_tv} x R$25,00 -- ponto adc. TV\n${v_wifi} x R$25,00 -- ponto adc. WI-FI\n<b>VALOR TOTAL: R$${valor_total} EM ${plural_parcelas(parcelas)}</b>\n<hr> Ciente do prazo máximo de 7 dias úteis, e que é necessário levar os dispositivos ao novo endereço. \n<hr> Confirmada a disponibilidade de conexão no local por: \n${confirmacao_disponibilidade}`
    
    window.document.getElementById("descricao").value = texto
                
}

function apagar_modelo_transferencia(){
    window.document.getElementById("num_parcelas").value = 1
    window.document.getElementById("novo_endereco").value = ""
    window.document.getElementById("confirmacao_disponibilidade").value = ""    
    window.document.getElementById("v_tv").value = 0
    window.document.getElementById("v_wifi").value = 0

    localStorage.setItem('V_transf', "0");
    localStorage.setItem('V_transf_tv', "0");
    localStorage.setItem('V_transf_wifi', "0");

    atualizar_valor_total()
    atualizar_parcelas()
}

function plural_parcelas(parcelas){
    if( parcelas == 1){
        return "1x (PARCELA ÚNICA)"
    }
    
        return `(${parcelas}x PARCELAS)`    
}