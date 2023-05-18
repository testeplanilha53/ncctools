//------------------------------------------------------
//Equipamentos Ópticos
//------------------------------------------------------

function tooltips_fun_Fiberhome(){        
    meu_id = window.document.getElementById("fun_Fiberhome")    

    //meu_id.className = "btn btn-info"

    var txt = `• Power: On/Off• PON/LINK: On/Off/Piscando• LOS/Perda: Piscando/off`    

    meu_id.setAttribute("data-original-title",txt)

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_ONU_NOKIA(){    
    meu_id = window.document.getElementById("fun_ONU_NOKIA")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `• Power: Verde estático/vermelho estático/apagado • LINK: Verde estático/Apagado • AUTH: Verde estático/Verde Piscando/ Apagado`

    meu_id.setAttribute("data-original-title",txt)

}


function tooltips_fun_Conversor_NOKIA(){
    meu_id = window.document.getElementById("fun_Conversor_NOKIA")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `• Power: Verde estático / Apagado • Alarm: vermelho estático/ Apagado • Connection: Verde estático / Verde Piscando /Apagado • ETH: Verde estático / Verde Piscando / Apagado`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_Datacom(){
    meu_id = window.document.getElementById("fun_Datacom")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `• Power: Verde estático/apagado • PON: Verde estático/apagado • ETH1: Verde estático/Verde Piscando/ Apagado`

    meu_id.setAttribute("data-original-title",txt)

}


//------------------------------------------------------
//SUPORTE
//------------------------------------------------------

function tooltips_fun_sup_falta_de_conexao (){
    meu_id = window.document.getElementById("fun_sup_falta_de_conexao")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Cliente relata falta de conexão. `

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_sup_lentidao (){
    meu_id = window.document.getElementById("fun_sup_lentidao")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Cliente relata lentidão. `

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_sup_oscilação (){
    meu_id = window.document.getElementById("fun_sup_oscilação")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Cliente relata oscilação. `

    meu_id.setAttribute("data-original-title",txt)

}


function tooltips_fun_sup_reinicio (){
    meu_id = window.document.getElementById("fun_sup_reinicio")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Feito o reinício da conexão via sistema e solicitado o reinício manual dos equipamentos. `

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_sup_checagem_cabos (){
    meu_id = window.document.getElementById("fun_sup_checagem_cabos")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Realizado a checagem dos cabos nos dispositivos. `

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_sup_teste_de_velocidade(){
    meu_id = window.document.getElementById("fun_sup_teste_de_velocidade")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `<hr><b>Valores obtidos pelo teste cabeado no fast.com:</b> <b>Download:</b> XXX Mbps, XXX Mbps, XXX Mbps <b>Upload:</b> XXX Mbps, XXX Mbps, XXX Mbps <b>Latência:</b> XXX ms, XXX ms, XXX ms `

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_sup_conexao_normalizada (){
    meu_id = window.document.getElementById("fun_sup_conexao_normalizada")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Conexão normalizada. `

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_sup_envio_de_vs (){
    meu_id = window.document.getElementById("fun_sup_envio_de_vs")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_ver_noc (){
    meu_id = window.document.getElementById("fun_ver_noc")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `<b>Verificação com o NOC:</b>[COLAR CONVERSA COM O NOC]`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_ver_sup (){
    meu_id = window.document.getElementById("fun_ver_sup")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `<b>Verificação com a supervisão:</b>[COLAR CONVERSA COM A SUPERVISÃO]`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_ver_escr (){
    meu_id = window.document.getElementById("fun_ver_escr")
    //change_color(meu_id)
    //meu_id.className = "btn btn-info"

    var txt = `<b>Verificação com o escritório:</b>[COLAR CONVERSA COM O ESCRITÓRIO]`

    meu_id.setAttribute("data-original-title",txt)

}


//------------------------------------------------------
// Serviços
//------------------------------------------------------
function tooltips_fun_Montagem_de_Rede(){
    meu_id = window.document.getElementById("fun_Montagem_de_Rede")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita montagem de rede. <hr> Montagem de rede: R$ 105,00 Nº de pontos adicionais: não informou Valor pontos adicionais: X * R$ 35,00 Configuração de roteador: (Sim R$ 35,00 / Não) Valor total: R$ 105,00 + Valor pontos adc + Config. roteador. Forma de pagamento: parcelamento em 4x.  Cliente ciente de que se a rede ultrapassar [(Nº pontos adicionais * 20m) + 20m], será cobrado R$ 3,00 por metro excedente. <hr> Encaminhado para verificação técnica no local, ciente do prazo de até sete dias úteis para ocorrer.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_Mudanca_de_comodo(){
    meu_id = window.document.getElementById("fun_Mudanca_de_comodo")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer.`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_Mudanca_de_comodo_amparo(){
    meu_id = window.document.getElementById("fun_Mudanca_de_comodo_amparo")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (em parcela única), do prazo máximo de 7 dias úteis para ocorrer.`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_Transferência_de_endereço(){
    meu_id = window.document.getElementById("fun_Transferência_de_endereço")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita transferência de endereço. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer, e que é necessário levar os dispositivos ao novo endereço. Cliente já está no novo endereço. <hr> <b> Novo endereço: </b>. <hr> Confirmada a disponibilidade de conexão no local por:`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_Transferência_de_endereço_amparo(){
    meu_id = window.document.getElementById("fun_Transferência_de_endereço_amparo")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita transferência de endereço. Ciente do valor de R$ 100,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer. Cliente já está no novo endereço. <hr> <b> Novo endereço:</b> <hr> Confirmado a disponibilidade de conexão no local por: `

    meu_id.setAttribute("data-original-title",txt)

}



//------------------------------------------------------
//Financeiro 
//------------------------------------------------------
function tooltips_fun_desb3001 (){
    meu_id = window.document.getElementById("fun_desb3001")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente entrou em contato solicitando o desbloqueio da conexão, ciente dos valores em pendência assim como o prazo de 3 a 5 dias corridos do desbloqueio. Orientado a realizar o reinicio manual do equipamento durante 15 minutos. Sem mais dúvidas.<b>Pendências em atraso no sistema:</b>`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_desb3001_indisp (){
    meu_id = window.document.getElementById("fun_desb3001_indisp")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita desbloqueio da conexão. Identificado bloqueio 3001. Ciente de que não é possível liberar o acesso em sistema, uma vez que já foi concedido o desbloqueio por 5 dias corridos. Repassados os valores atualizados e prazos das pendências, assim como as formas de pagamento disponíveis, sem mais dúvidas.<b>Pendências em atraso:</b>`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_desb3001_pag_efetuado (){
    meu_id = window.document.getElementById("fun_desb3001_pag_efetuado")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão após o pagamento da pendência. Identificado bloqueio 3001. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_bloqueio_verde (){
    meu_id = window.document.getElementById("fun_bloqueio_verde")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita desbloqueio da conexão. Identificado bloqueio verde. Ciente de que não é possível liberar o acesso em sistema e ciente dos valores atualizados e prazos das pendências. Repassadas as formas de pagamento disponíveis, sem mais dúvidas.<b>Pendências em atraso:</b>`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_bloqueio_azul (){
    meu_id = window.document.getElementById("fun_bloqueio_azul")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita o bloqueio temporário da conexão. Ciente que o cadastro poderá ficar bloqueado por até 120 dias corridos e que o desbloqueio será automático. Repassado que para solicitar o bloqueio ele deve pagar todos as faturas em aberto no sistema e será gerada outra referente aos dias de uso até o data da solicitação. Ciente também que pode estar solicitando esse serviço no escritório local ou através do e-mail bloqueio@fasternet.com.br.`

    meu_id.setAttribute("data-original-title",txt)

}

//------------------------------------------------------
//Senha Wi-FI 
//------------------------------------------------------

function tooltips_fun_senha_wifi_ip (){
    meu_id = window.document.getElementById("fun_senha_wifi_ip")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo IP padrão. Alteração feita com sucesso. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}
function tooltips_fun_senha_wifi_app (){
    meu_id = window.document.getElementById("fun_senha_wifi_app")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo aplicativo. Repassadas as instruções, alteração feita com sucesso. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}



//------------------------------------------------------
//Cancelamento e Troca de titularidade
//------------------------------------------------------

function tooltips_fun_can_titular (){
    meu_id = window.document.getElementById("fun_can_titular")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita cancelamento da conexão. Informado de que tal solicitação será repassada para o setor responsável, que fará posterior contato para fins de conclusão/negociação. Cliente ciente da solicitação em sistema, sem mais dúvidas. <b>Motivo do cancelamento: </b> <hr> <b>Ofertado: </b> XXXXXX <hr> <b> Verificação com a supervisão: </b>`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_can_com_pendencia (){
    meu_id = window.document.getElementById("fun_can_com_pendencia")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita cancelamento da assinatura. Ciente de que há pendências em atraso e que é necessário quitá-las para fazer o pedido de cancelamento por esse canal de atendimento. Repassada a possibilidade de efetuar o pedido diretamente no escritório munido dos equipamentos. Informados os valores e prazos atualizados com juros, assim como as formas de pagamento disponíveis. Sem mais dúvidas. <hr>Pendências em atraso:`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_can_outra_pessoa (){
    meu_id = window.document.getElementById("fun_can_outra_pessoa")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita cancelamento da conexão. Ciente de que tal procedimento deve ser tratado diretamente com o titular da conta. Solicitado novo contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_troca_titularidade (){
    meu_id = window.document.getElementById("fun_troca_titularidade")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicitou informação sobre troca de titularidade. Repassado que o titular deve encaminhar o pedido para cancelamento@fasternet.com.br, no qual deve ser enviado também como cópia para o novo titular da conta. Caso não seja possível, pode ser solicitada no escritório local e é necessária a presença do atual e do novo titular, assim como a documentação de ambos.`

    meu_id.setAttribute("data-original-title",txt)

}

//------------------------------------------------------
//Problemas na conexão
//------------------------------------------------------

function tooltips_fun_nao_repassou_cpf (){
    meu_id = window.document.getElementById("fun_nao_repassou_cpf")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão, porém não soube repassar o CPF do titular da conta. Solicitado novo contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_normalizada_sem_procedimento (){
    meu_id = window.document.getElementById("fun_normalizada_sem_procedimento")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão. Durante o atendimento, a conexão foi normalizada sem a necessidade de realizar os procedimentos padrões. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_recusa_procedimento (){
    meu_id = window.document.getElementById("fun_recusa_procedimento")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão. Ao solicitar a realização de procedimentos padrão (reinício e verificação de cabos), afirmou que não tem interesse em realizá-los e solicitou visita técnica. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_ip_de_bloqueio (){
    meu_id = window.document.getElementById("fun_ip_de_bloqueio")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão após o pagamento da pendência. Identificado IP de bloqueio. Feito o reinício dos dispositivos e verificação de cabos. Conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_prob_ext_conclusao (){
    meu_id = window.document.getElementById("fun_prob_ext_conclusao")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer. Sem mais dúvidas.[Mensagem sobre o problema externo informado pela monitoria / supervisão].`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_prob_ext_suporte (){
    meu_id = window.document.getElementById("fun_prob_ext_suporte")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer e ciente de que será feito posterior contato após a normalização. Ligar no nº XXXXXXXXXXX - falar com Sr.(a) XXXXXXXXXX. Sem mais dúvidas. [Mensagem sobre o problema externo informado pela monitoria / supervisão].`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_nao_esta_no_local (){
    meu_id = window.document.getElementById("fun_nao_esta_no_local")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de conexão, porém não está no local de instalação. Solicitado novo contato quando estivesse no local.`

    meu_id.setAttribute("data-original-title",txt)

}

//------------------------------------------------------
//Problemas na conexão
//------------------------------------------------------

function tooltips_fun_tv_normalizado (){
    meu_id = window.document.getElementById("fun_tv_normalizado")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos do STB e dos equipamentos de fibra. Conexão não normalizada. Verificado com o Rodrigo Fragoso. Conexão normalizada. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.[Cópia da conversa via Spark com o Rodrigo Fragoso].`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_tv_nao_normalizado (){
    meu_id = window.document.getElementById("fun_tv_nao_normalizado")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos do STB e dos equipamentos de fibra. Verificado com o Rodrigo Fragoso. Conexão não normalizada. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.[Cópia da conversa via Spark com o Rodrigo Fragoso].`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_tv_normalizado_sem_verificacao (){
    meu_id = window.document.getElementById("fun_tv_normalizado_sem_verificacao")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata falta de acesso na TV Faster. Foram realizados procedimentos de reinício e verificação de cabos. Conexão normalizada. Ciente que deve monitorar o acesso e que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}



//------------------------------------------------------
//Informação sobre visita técnica
//------------------------------------------------------

function tooltips_fun_dentro_do_prazo_vs (){
    meu_id = window.document.getElementById("fun_dentro_do_prazo_vs")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Instruído a aguardar a visita ocorrer, uma vez que está dentro do prazo máximo. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}


function tooltips_fun_fora_do_prazo_vs (){
    meu_id = window.document.getElementById("fun_fora_do_prazo_vs")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Instruído a aguardar a visita ocorrer, uma vez que o escritório local afirma que ocorrerá no dia de XX/XX. <hr><b> [Verificação com o escritório local] </b>:`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_escritorio_indisp (){
    meu_id = window.document.getElementById("fun_escritorio_indisp")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informação sobre a visita técnica referente ao protocolo [número do protocolo]. Escritório indisponível para verificação. Solicitado posterior contato após às XX h, pois o escritório estará disponível. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_cancelamento_vs (){
    meu_id = window.document.getElementById("fun_cancelamento_vs")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita o cancelamento da visita [número do protocolo], pois informou que o acesso normalizou. Feito o cancelamento e repassado para o cliente. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}


//------------------------------------------------------
//Informação sobre pendências
//------------------------------------------------------

function tooltips_fun_pendencias_atraso (){
    meu_id = window.document.getElementById("fun_pendencias_atraso")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente entrou em contato solicitando informações sobre pendências de boletos. Repassadas as informações sobre os valores e taxas, e as datas referentes aos meses de pendências. Sem mais dúvidas.<b> Pendências em atraso:</b>`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_negociacao_pendencias (){
    meu_id = window.document.getElementById("fun_negociacao_pendencias")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita negociação das pendências. Ciente de que tal verificação deverá ser feita diretamente no escritório local ou via e-mail pelo (atendimentofinanceiro@fasternet.com.br). Ciente dos valores e prazos das pendências em atraso, assim como das formas de pagamento disponíveis. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_pag_duplicado (){
    meu_id = window.document.getElementById("fun_pag_duplicado")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente relata pagamento em duplicidade. Colhidos os comprovantes e enviado o caso para o setor financeiro via e-mail solicitando a verificação dos pagamentos. Cliente informado que o caso está sob análise, e que será feito um contato posterior quando for obtido resposta pelo setor responsável. Sem mais dúvidas. <hr>[Registrar cópia do e-mail enviado]`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_data_vencimento (){
    meu_id = window.document.getElementById("fun_data_vencimento")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita alteração da data de vencimento das faturas para o dia XX de cada mês. Instruído a fazer a devida alteração pelo site da empresa. Feito passo a passo. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_formas_pagamento (){
    meu_id = window.document.getElementById("fun_formas_pagamento")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informação sobre as formas de pagamento disponíveis. Ciente das informações, instruído a retirá-lo no site da empresa e pagar as pendências de forma on-line. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}





//------------------------------------------------------
//Emissão de 2ª via da fatura
//------------------------------------------------------

function tooltips_fun_instrucao_via_site (){
    meu_id = window.document.getElementById("fun_instrucao_via_site")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita segunda via do boleto. Instruído a retirá-lo no site da empresa. Ciente do passo a passo a ser realizado e feita a atualização dos dados para contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_via_sms (){
    meu_id = window.document.getElementById("fun_via_sms")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita segunda via do boleto. Enviado link da fatura por SMS através do ADM, ciente do passo a passo a ser realizado . Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}


function tooltips_fun_nota_fical (){
    meu_id = window.document.getElementById("fun_nota_fical")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita segunda via da nota fiscal referente ao mês XX. Instruído a retirá-lo no site da empresa através da opção Painel de Controle. Ciente do passo a passo a ser realizado e feita a atualização dos dados para contato. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_troca_plano (){
    meu_id = window.document.getElementById("fun_troca_plano")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informações sobre troca de plano. Repassados os planos em catálogo para cliente. Orientado (a) a enviar um e-mail com a solicitação da troca para novoplano@fasternet.com.br ou solicitar presencialmente no escritório local.  Cliente ciente que para o mês posterior à solicitação, serão geradas duas faturas com os valores proporcionais aos períodos em que cada plano foi utilizado.`

    meu_id.setAttribute("data-original-title",txt)

}


//------------------------------------------------------
//SVA e TOKEN
//------------------------------------------------------

function tooltips_fun_sva (){
    meu_id = window.document.getElementById("fun_sva")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicitou informações sobre SVA’s inclusos no seu plano. Informado dos serviços adicionais disponíveis e repassado o passo a passo para ativação através do site da FasterNet. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_token_fatura (){
    meu_id = window.document.getElementById("fun_token_fatura")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informações sobre o número de Token para acessar suas faturas. Repassadas as instruções de acesso ao site da FasterNet e do procedimento sobre como gerar o Token. Informação obtida com sucesso. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}

function tooltips_fun_token_sva (){
    meu_id = window.document.getElementById("fun_token_sva")
    change_color(meu_id)
    //meu_id.className = "btn btn-danger"

    var txt = `Cliente solicita informações sobre o número de Token para ativar os SVA. Repassadas as instruções de acesso ao site da FasterNet e do procedimento sobre como gerar o Token. Informação obtida com sucesso. Sem mais dúvidas.`

    meu_id.setAttribute("data-original-title",txt)

}
