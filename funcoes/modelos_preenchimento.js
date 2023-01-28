
var descricao = window.document.getElementById("descricao")


var elements = document.querySelectorAll(`[id^="fun_"]`)
function change_color(meu_id){
    elements.forEach(element => {
        if (element.id!="meu_id"){
            element.className = "btn btn-outline-dark"
            console.log(element)
        }
                
    });
}



//------------------------------------------------------
//Equipamentos Ópticos
//------------------------------------------------------

function fun_Fiberhome(){        
    meu_id = window.document.getElementById("fun_Fiberhome")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n• Power: On/Off\n• PON/LINK: On/Off/Piscando\n• LOS/Perda: Piscando/off`    

}

function fun_ONU_NOKIA(){    
    meu_id = window.document.getElementById("fun_ONU_NOKIA")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n• Power: Verde estático/vermelho estático/apagado \n• LINK: Verde estático/Apagado \n• AUTH: Verde estático/Verde Piscando/ Apagado`

}


function fun_Conversor_NOKIA(){
    meu_id = window.document.getElementById("fun_Conversor_NOKIA")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n• Power: Verde estático / Apagado \n• Alarm: vermelho estático/ Apagado \n• Connection: Verde estático / Verde Piscando /Apagado \n• ETH: Verde estático / Verde Piscando / Apagado`

}

function fun_Datacom(){
    meu_id = window.document.getElementById("fun_Datacom")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n• Power: Verde estático/apagado \n• PON: Verde estático/apagado \n• ETH1: Verde estático/Verde Piscando/ Apagado`

}


//------------------------------------------------------
//SUPORTE
//------------------------------------------------------

function fun_sup_falta_de_conexao (){
    meu_id = window.document.getElementById("fun_sup_falta_de_conexao")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `Cliente relata falta de conexão. `

}
function fun_sup_lentidao (){
    meu_id = window.document.getElementById("fun_sup_lentidao")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `Cliente relata lentidão. `

}
function fun_sup_oscilação (){
    meu_id = window.document.getElementById("fun_sup_oscilação")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `Cliente relata oscilação. `

}


function fun_sup_reinicio (){
    meu_id = window.document.getElementById("fun_sup_reinicio")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `Feito o reinício da conexão via sistema e solicitado o reinício manual dos equipamentos. `

}
function fun_sup_checagem_cabos (){
    meu_id = window.document.getElementById("fun_sup_checagem_cabos")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `Realizado a checagem dos cabos nos dispositivos. `

}
function fun_sup_teste_de_velocidade(){
    meu_id = window.document.getElementById("fun_sup_teste_de_velocidade")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n<hr><b>Valores obtidos pelo teste cabeado no fast.com:</b> \n<b>Download:</b> XXX Mbps, XXX Mbps, XXX Mbps \n<b>Upload:</b> XXX Mbps, XXX Mbps, XXX Mbps \n<b>Latência:</b> XXX ms, XXX ms, XXX ms `

}

function fun_sup_conexao_normalizada (){
    meu_id = window.document.getElementById("fun_sup_conexao_normalizada")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\nConexão normalizada. `

}
function fun_sup_envio_de_vs (){
    meu_id = window.document.getElementById("fun_sup_envio_de_vs")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\nEncaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.`

}

function fun_ver_noc (){
    meu_id = window.document.getElementById("fun_ver_noc")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n<b>Verificação com o NOC:</b>\n[COLAR CONVERSA COM O NOC]`

}

function fun_ver_sup (){
    meu_id = window.document.getElementById("fun_ver_sup")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n<b>Verificação com a supervisão:</b>\n[COLAR CONVERSA COM A SUPERVISÃO]`

}

function fun_ver_escr (){
    meu_id = window.document.getElementById("fun_ver_escr")
    //change_color(meu_id)
    meu_id.className = "btn btn-info"

    descricao.value += `\n\n<b>Verificação com o escritório:</b>\n[COLAR CONVERSA COM O ESCRITÓRIO]`

}


//------------------------------------------------------
// Serviços
//------------------------------------------------------
function fun_Montagem_de_Rede(){
    meu_id = window.document.getElementById("fun_Montagem_de_Rede")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita montagem de rede. <hr> Montagem de rede: R$ 105,00 \nNº de pontos adicionais: não informou \nValor pontos adicionais: X * R$ 35,00 \nConfiguração de roteador: (Sim R$ 35,00 / Não) \nValor total: R$ 105,00 + Valor pontos adc + Config. roteador. \nForma de pagamento: parcelamento em 4x. \n \nCliente ciente de que se a rede ultrapassar [(Nº pontos adicionais * 20m) + 20m], será cobrado R$ 3,00 por metro excedente. <hr> Encaminhado para verificação técnica no local, ciente do prazo de até sete dias úteis para ocorrer.`

}

function fun_Mudanca_de_comodo(){
    meu_id = window.document.getElementById("fun_Mudanca_de_comodo")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer.`

}
function fun_Mudanca_de_comodo_amparo(){
    meu_id = window.document.getElementById("fun_Mudanca_de_comodo_amparo")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (em parcela única), do prazo máximo de 7 dias úteis para ocorrer.`

}
function fun_Transferência_de_endereço(){
    meu_id = window.document.getElementById("fun_Transferência_de_endereço")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita transferência de endereço. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer, e que é necessário levar os dispositivos ao novo endereço. Cliente já está no novo endereço. \n<hr> <b> Novo endereço: </b>. \n<hr> Confirmada a disponibilidade de conexão no local por:\n`

}
function fun_Transferência_de_endereço_amparo(){
    meu_id = window.document.getElementById("fun_Transferência_de_endereço_amparo")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita transferência de endereço. Ciente do valor de R$ 100,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer. Cliente já está no novo endereço. \n<hr> <b> Novo endereço:</b> \n<hr> Confirmado a disponibilidade de conexão no local por: \n`

}



//------------------------------------------------------
//Financeiro 
//------------------------------------------------------
function fun_desb3001 (){
    meu_id = window.document.getElementById("fun_desb3001")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente entrou em contato solicitando o desbloqueio da conexão, ciente dos valores em pendência assim como o prazo de 3 a 5 dias corridos do desbloqueio. Orientado a realizar o reinicio manual do equipamento durante 15 minutos. Sem mais dúvidas.\n\n<b>Pendências em atraso no sistema:</b>`

}
function fun_desb3001_indisp (){
    meu_id = window.document.getElementById("fun_desb3001_indisp")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita desbloqueio da conexão. Identificado bloqueio 3001. Ciente de que não é possível liberar o acesso em sistema, uma vez que já foi concedido o desbloqueio por 5 dias corridos. Repassados os valores atualizados e prazos das pendências, assim como as formas de pagamento disponíveis, sem mais dúvidas.\n\n<b>Pendências em atraso:</b>`

}
function fun_desb3001_pag_efetuado (){
    meu_id = window.document.getElementById("fun_desb3001_pag_efetuado")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão após o pagamento da pendência. Identificado bloqueio 3001. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Sem mais dúvidas.`

}
function fun_bloqueio_verde (){
    meu_id = window.document.getElementById("fun_bloqueio_verde")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita desbloqueio da conexão. Identificado bloqueio verde. Ciente de que não é possível liberar o acesso em sistema e ciente dos valores atualizados e prazos das pendências. Repassadas as formas de pagamento disponíveis, sem mais dúvidas.\n\n<b>Pendências em atraso:</b>`

}
function fun_bloqueio_azul (){
    meu_id = window.document.getElementById("fun_bloqueio_azul")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita o bloqueio temporário da conexão. Ciente que o cadastro poderá ficar bloqueado por até 120 dias corridos e que o desbloqueio será automático. Repassado que para solicitar o bloqueio ele deve pagar todos as faturas em aberto no sistema e será gerada outra referente aos dias de uso até o data da solicitação. Ciente também que pode estar solicitando esse serviço no escritório local ou através do e-mail bloqueio@fasternet.com.br.`

}

//------------------------------------------------------
//Senha Wi-FI 
//------------------------------------------------------

function fun_senha_wifi_ip (){
    meu_id = window.document.getElementById("fun_senha_wifi_ip")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo IP padrão. Alteração feita com sucesso. Sem mais dúvidas.`

}
function fun_senha_wifi_app (){
    meu_id = window.document.getElementById("fun_senha_wifi_app")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo aplicativo. Repassadas as instruções, alteração feita com sucesso. Sem mais dúvidas.`

}



//------------------------------------------------------
//Cancelamento e Troca de titularidade
//------------------------------------------------------

function fun_can_titular (){
    meu_id = window.document.getElementById("fun_can_titular")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita cancelamento da conexão. Informado de que tal solicitação será repassada para o setor responsável, que fará posterior contato para fins de conclusão/negociação. Cliente ciente da solicitação em sistema, sem mais dúvidas. \n<b>Motivo do cancelamento: </b> <hr> \n<b>Ofertado: </b> XXXXXX <hr> \n<b> Verificação com a supervisão: </b>`

}

function fun_can_com_pendencia (){
    meu_id = window.document.getElementById("fun_can_com_pendencia")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita cancelamento da assinatura. Ciente de que há pendências em atraso e que é necessário quitá-las para fazer o pedido de cancelamento por esse canal de atendimento. Repassada a possibilidade de efetuar o pedido diretamente no escritório munido dos equipamentos. Informados os valores e prazos atualizados com juros, assim como as formas de pagamento disponíveis. Sem mais dúvidas. \n<hr>Pendências em atraso:`

}

function fun_can_outra_pessoa (){
    meu_id = window.document.getElementById("fun_can_outra_pessoa")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita cancelamento da conexão. Ciente de que tal procedimento deve ser tratado diretamente com o titular da conta. Solicitado novo contato. Sem mais dúvidas.`

}

function fun_troca_titularidade (){
    meu_id = window.document.getElementById("fun_troca_titularidade")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicitou informação sobre troca de titularidade. Repassado que o titular deve encaminhar o pedido para cancelamento@fasternet.com.br, no qual deve ser enviado também como cópia para o novo titular da conta. Caso não seja possível, pode ser solicitada no escritório local e é necessária a presença do atual e do novo titular, assim como a documentação de ambos.`

}

//------------------------------------------------------
//Problemas na conexão
//------------------------------------------------------

function fun_nao_repassou_cpf (){
    meu_id = window.document.getElementById("fun_nao_repassou_cpf")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão, porém não soube repassar o CPF do titular da conta. Solicitado novo contato. Sem mais dúvidas.`

}

function fun_normalizada_sem_procedimento (){
    meu_id = window.document.getElementById("fun_normalizada_sem_procedimento")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão. Durante o atendimento, a conexão foi normalizada sem a necessidade de realizar os procedimentos padrões. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

}

function fun_recusa_procedimento (){
    meu_id = window.document.getElementById("fun_recusa_procedimento")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão. Ao solicitar a realização de procedimentos padrão (reinício e verificação de cabos), afirmou que não tem interesse em realizá-los e solicitou visita técnica. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.`

}

function fun_ip_de_bloqueio (){
    meu_id = window.document.getElementById("fun_ip_de_bloqueio")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão após o pagamento da pendência. Identificado IP de bloqueio. Feito o reinício dos dispositivos e verificação de cabos. Conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

}

function fun_prob_ext_conclusao (){
    meu_id = window.document.getElementById("fun_prob_ext_conclusao")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer. Sem mais dúvidas.\n\n[Mensagem sobre o problema externo informado pela monitoria / supervisão].`

}

function fun_prob_ext_suporte (){
    meu_id = window.document.getElementById("fun_prob_ext_suporte")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer e ciente de que será feito posterior contato após a normalização. Ligar no nº XXXXXXXXXXX - falar com Sr.(a) XXXXXXXXXX. Sem mais dúvidas. \n\n[Mensagem sobre o problema externo informado pela monitoria / supervisão].`

}

function fun_nao_esta_no_local (){
    meu_id = window.document.getElementById("fun_nao_esta_no_local")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de conexão, porém não está no local de instalação. Solicitado novo contato quando estivesse no local.`

}

//------------------------------------------------------
//Problemas na conexão
//------------------------------------------------------

function fun_tv_normalizado (){
    meu_id = window.document.getElementById("fun_tv_normalizado")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos do STB e dos equipamentos de fibra. Conexão não normalizada. Verificado com o Rodrigo Fragoso. Conexão normalizada. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.\n\n[Cópia da conversa via Spark com o Rodrigo Fragoso].`

}

function fun_tv_nao_normalizado (){
    meu_id = window.document.getElementById("fun_tv_nao_normalizado")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos do STB e dos equipamentos de fibra. Verificado com o Rodrigo Fragoso. Conexão não normalizada. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.\n\n[Cópia da conversa via Spark com o Rodrigo Fragoso].`

}

function fun_tv_normalizado_sem_verificacao (){
    meu_id = window.document.getElementById("fun_tv_normalizado_sem_verificacao")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos. Conexão normalizada. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

}



//------------------------------------------------------
//Informação sobre visita técnica
//------------------------------------------------------

function fun_dentro_do_prazo_vs (){
    meu_id = window.document.getElementById("fun_dentro_do_prazo_vs")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Instruído a aguardar a visita ocorrer, uma vez que está dentro do prazo máximo. Sem mais dúvidas.`

}


function fun_fora_do_prazo_vs (){
    meu_id = window.document.getElementById("fun_fora_do_prazo_vs")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Instruído a aguardar a visita ocorrer, uma vez que o escritório local afirma que ocorrerá no dia de XX/XX. <hr>\n\n<b> [Verificação com o escritório local] </b>:`

}

function fun_escritorio_indisp (){
    meu_id = window.document.getElementById("fun_escritorio_indisp")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Escritório indisponível para verificação. Solicitado posterior contato após às XX h, pois o escritório estará disponível. Sem mais dúvidas.`

}

function fun_cancelamento_vs (){
    meu_id = window.document.getElementById("fun_cancelamento_vs")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita o cancelamento da visita [número do protocolo], pois informou que o acesso normalizou. Feito o cancelamento e repassado para o cliente. Sem mais dúvidas.`

}


//------------------------------------------------------
//Informação sobre pendências
//------------------------------------------------------

function fun_pendencias_atraso (){
    meu_id = window.document.getElementById("fun_pendencias_atraso")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente entrou em contato solicitando informações sobre pendências de boletos. Repassadas as informações sobre os valores e taxas, e as datas referentes aos meses de pendências. Sem mais dúvidas.\n\n<b> Pendências em atraso:</b>`

}

function fun_negociacao_pendencias (){
    meu_id = window.document.getElementById("fun_negociacao_pendencias")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita negociação das pendências. Ciente de que tal verificação deverá ser feita diretamente no escritório local ou via e-mail pelo (atendimentofinanceiro@fasternet.com.br). Ciente dos valores e prazos das pendências em atraso, assim como das formas de pagamento disponíveis. Sem mais dúvidas.`

}

function fun_pag_duplicado (){
    meu_id = window.document.getElementById("fun_pag_duplicado")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente relata pagamento em duplicidade. Colhidos os comprovantes e enviado o caso para o setor financeiro via e-mail solicitando a verificação dos pagamentos. Cliente informado que o caso está sob análise, e que será feito um contato posterior quando for obtido resposta pelo setor responsável. Sem mais dúvidas. <hr>\n\n[Registrar cópia do e-mail enviado]`

}

function fun_data_vencimento (){
    meu_id = window.document.getElementById("fun_data_vencimento")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita alteração da data de vencimento das faturas para o dia XX de cada mês. Instruído a fazer a devida alteração pelo site da empresa. Feito passo a passo. Sem mais dúvidas.`

}

function fun_formas_pagamento (){
    meu_id = window.document.getElementById("fun_formas_pagamento")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informação sobre as formas de pagamento disponíveis. Ciente das informações, instruído a retirá-lo no site da empresa e pagar as pendências de forma on-line. Sem mais dúvidas.`

}





//------------------------------------------------------
//Emissão de 2ª via da fatura
//------------------------------------------------------

function fun_instrucao_via_site (){
    meu_id = window.document.getElementById("fun_instrucao_via_site")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita segunda via do boleto. Instruído a retirá-lo no site da empresa. Ciente do passo a passo a ser realizado e feita a atualização dos dados para contato. Sem mais dúvidas.`

}

function fun_via_sms (){
    meu_id = window.document.getElementById("fun_via_sms")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita segunda via do boleto. Enviado link da fatura por SMS através do ADM, ciente do passo a passo a ser realizado . Sem mais dúvidas.`

}


function fun_nota_fical (){
    meu_id = window.document.getElementById("fun_nota_fical")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita segunda via da nota fiscal referente ao mês XX. Instruído a retirá-lo no site da empresa através da opção Painel de Controle. Ciente do passo a passo a ser realizado e feita a atualização dos dados para contato. Sem mais dúvidas.`

}

function fun_troca_plano (){
    meu_id = window.document.getElementById("fun_troca_plano")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informações sobre troca de plano. Repassados os planos em catálogo para cliente. Orientado (a) a enviar um e-mail com a solicitação da troca para novoplano@fasternet.com.br ou solicitar presencialmente no escritório local.`

}


//------------------------------------------------------
//SVA e TOKEN
//------------------------------------------------------

function fun_sva (){
    meu_id = window.document.getElementById("fun_sva")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicitou informações sobre SVA’s inclusos no seu plano. Informado dos serviços adicionais disponíveis e repassado o passo a passo para ativação através do site da FasterNet. Sem mais dúvidas.`

}

function fun_token_fatura (){
    meu_id = window.document.getElementById("fun_token_fatura")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informações sobre o número de Token para acessar suas faturas. Repassadas as instruções de acesso ao site da FasterNet e do procedimento sobre como gerar o Token. Informação obtida com sucesso. Sem mais dúvidas.`

}

function fun_token_sva (){
    meu_id = window.document.getElementById("fun_token_sva")
    change_color(meu_id)
    meu_id.className = "btn btn-danger"

    descricao.value = `Cliente solicita informações sobre o número de Token para ativar os SVA. Repassadas as instruções de acesso ao site da FasterNet e do procedimento sobre como gerar o Token. Informação obtida com sucesso. Sem mais dúvidas.`

}