var date = new Date();
var day  =  getDay() +"/"+ getMonth() ;
var cData = [];


var cName =  document.getElementById("name"); //nome
var phoneNumber =  document.getElementById("phone-number"); //número de telefone
var cRequest =  document.getElementById("request"); //solicitação
var cCpf = document.getElementById("cpf");

//VARIÁVEIS PARA RESPOSTA DE VENDAS
var priceAddress = document.getElementById("priceAddress");
var priceDistrict = document.getElementById("priceDistrict"); //Bairro
var priceAdressNumber =  document.getElementById("priceAdressNumber"); //ponto de referência
var priceCity = document.getElementById("priceCity"); //cidade
var priceHouseType = document.getElementById("priceHouseType"); //tipo de residencia
var priceReference = document.getElementById("priceReference"); //ponto de referencia
var priceHolder = document.getElementById("priceHolder"); //responsável
var pricePhoneNumber = document.getElementById("pricePhoneNumber"); //telefone para contato
var priceBestTime = document.getElementById("priceBestTime"); //melhor horário
var priceCPF = document.getElementById("priceCpf");


//VARIÁVEIS PARA RESPOSTA DE TRANSFERÊNCIA DE ENDEREÇO
var altAddress = document.getElementById("altAddress");
var altDistrict = document.getElementById("altDistrict"); //BAirro
var altAdressNumber =  document.getElementById("altAdressNumber"); //ponto de referência
var altCity = document.getElementById("altCity"); //cidade
var altHouseType = document.getElementById("altHouseType"); //tipo de residencia
var altReference = document.getElementById("altReference"); //ponto de referencia
var altHolder = document.getElementById("altHolder"); //responsável
var altPhoneNumber = document.getElementById("altPhoneNumber"); //telefone para contato
var altBestTime = document.getElementById("altBestTime"); //melhor horário
var altAvailability = document.getElementById("altAvailability"); //Disponibilidade
var altLastVisit = document.getElementById("altLastVisit") //Última visita
var altAlreadyMoved = document.getElementById("altAlreadyMoved") //Última visita

const problems = {
	0 : "ALL",
	1: "FALTA DE CONEXÃO OU LENTIDÃO",
	2: "FALTA DE CONEXÃO RELACIONADO A PENDÊNCIAS",
	3: "INFORMAÇÕES SOBRE VISITA TÉCNICA",
	4: "DESBLOQUEIO",
	5: "SOLICITAÇÕES DE ALTERAÇÃO",
	6: "PROBLEMA EXTERNO",
	7: "SEGUNDA VIA DO BOLETO",
	8: "PAGAMENTO",
	9: "CANCELAMENTO",
	10: "MONTAGEM DE REDE",
	11: "VENDAS",
	12: "SERVIÇO DE TV",
	13: "PADRAO VERIFICAÇAO VIA SPARK",
	14: "CANCELAMENTO DA VISITA TÉCNICA",
	15: "ERRO DE ABERTURA",
}



//  Atribui as respostas a variável cData
function updateConstData(){
	cData =  
	[

		{
			"type": 1,
			"obs" : " SEM CONTATO",
			"response": " Tentativa de contato sem sucesso no(s) número(s) - XXXX"
		},

		{
			"type": 1,
			"obs" : " SEM CPF",
			"response": " Porém não soube repassar o CPF do titular da conta. Solicitado novo contato. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " NÃO ESTAVA NO LOCAL",
			"response": " Cliente relata falta de conexão, porém não estava no local de instalação dos equipamentos. Solicitado novo contato para realizar os procedimentos. Sem mais dúvidas. "
		},

		{
			"type": 1,
			"obs" : " CONEXÂO RETORNOU",
			"response": " Cliente relata falta de conexão, porém antes de realizar os procedimentos a conexão normalizou. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas. "
		},

		{
			"type": 1,
			"obs" : " LIGAÇÃO FICOU MUDA",
			"response": " Cliente relata falta de conexão, porém durante o atendimento a ligação ficou muda, sendo encerrada por falta de comunicação. "
		},


		{
			"type": 1,
			"obs" : " NARMALIZA COM PROCEDIMENTOS FIBRA",
			"response": " Foram realizados procedimentos de reinício e verificação de cabos. Conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " ROTEADOR RESETADO",
			"response": "Cliente relata falta de conexão e informa que não aparece o nome da rede wifi. Solicitado que pressionasse o botão WPS, feito o reinício dos equipamentos, pressionado o botão WLAN por 30 segundos, conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " ROTEADOR DESLIGADO",
			"response": "Cliente relata falta de conexão e informa que não acendem os leds. Solicitada a pressão do botão on/off. Cliente informa que acenderam, mas estava sem conexão. Identificado IP de bloqueio. Feito o procedimento de reinício. Conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " REINÍCIO DE 20 MINUTOS",
			"response": " Foram realizados os procedimentos de reinício e verificação de cabos. Conexão não normalizada. Solicitado reinício de 20 minutos. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."

		},

		{
			"type": 1,
			"obs" : " [FIBERHOME]<h4 style='color: red;'>3 dias úteis</h4>",
			"response": " Foram realizados procedimentos de reinício e verificação de cabos. Conexão não normalizada. <b> Power on/ link off / LOS/PERDA aceso.</b> Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer. <hr> Ponto de referência: XXX. Melhor turno: XXX. <hr> Última visita:  #XXX."
		},

		{
			"type": 1,
			"obs" : " [NOKIA ONT]<h4 style='color: red;'>3 dias úteis</h4>",
			"response": " Foram realizados procedimentos de reinício e verificação de cabos. Conexão não normalizada. <b> Power on / link off / Auth off.</b> Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer. <hr> Ponto de referência: XXX. Melhor turno: XXX. <hr> Última visita:  #XXX."
		},

		{
			"type": 1,
			"obs" : " [NOKIA BRIDGE]<h4 style='color: red;'>3 dias úteis</h4>",
			"response": " Foram realizados procedimentos de reinício e verificação de cabos. Conexão não normalizada. <b> Power LIgado / Alarm off / Connection off.</b> Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer. <hr> Ponto de referência: XXX. Melhor turno: XXX. <hr> Última visita:  #XXX."
		},


		{
			"type": 1,
			"obs" : " [DATACOM]<h4 style='color: red;'>3 dias úteis</h4>",
			"response": " Foram realizados procedimentos de reinício e verificação de cabos. Conexão não normalizada. <b> Power ligado / pon off / ETH1.</b> Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer. <hr> Ponto de referência: XXX. Melhor turno: XXX. <hr> Última visita:  #XXX."
		},

		{
			"type": 1,
			"obs" : " NOC E PROCEDIMENTOS FIBRA",
			"response": " Identificado em sistema que foram realizados os procedimentos de reinício e verificação de cabos referente ao protocolo XXX. Verificado com o NOC. Conexão normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " PROTOCOLO JÁ GERADO( DENTRO DO PRAZO)",
			"response": " Identificado em sistema um protocolo referente a visita técnica no local (ref.: XXX). Instruído a aguardar a visita ocorrer, uma vez que está dentro do prazo máximo. Sem mais dúvidas."
		},

		{
			"type": 1,
			"obs" : " MANTIDO EM SUPORTE",
			"response": " Foram realizados os procedimentos de reinício e verificação de cabos. Conexão não normalizada. Protocolo mantido em suporte para fins de verificação e posterior retorno. Sem mais dúvidas. <hr>"
		},

		{
			"type": 1,
			"obs" : " LENTIDÃO DENTRO DA GARANTIA",
			"response": " Ciente da garantia do teste cabeado pelo site Fast.com. Realizados três testes consecutivos, identificado que está dentro da garantia concedida pela empresa. <hr> Valores obtidos no Fast.com. \n DOWNLOAD: XX Mbps, XX Mbps, XX Mbps \n UPLOAD: XX Mbps, XX Mbps, XX Mbps</b>"
		},

		{
			"type": 1,
			"obs" : " LENTIDÃO FORA DA GARANTIA",
			"response": " Ciente da garantia do teste cabeado pelo site Fast.com. Realizados três testes consecutivos, identificado que não está dentro da garantia concedida pela empresa. <hr> Valores obtidos no Fast.com. \n DOWNLOAD: XX Mbps, XX Mbps, XX Mbps \n UPLOAD: XX Mbps, XX Mbps, XX Mbps</b>"
		},


		{
			"type": 1,
			"obs" : " ROTEADOR NÃO LIGA",
			"response": "Cliente relata falta de conexão e informa que os leds estão todos apagados. Solicitado a troca de tomada, pressão do botão On/off, verificação dos cabos se estavam bem conectados, mas sem sucesso. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer e informado sobre a possibilidade de custo. <hr> Ponto de referência:   Melhor turno:   <hr> Última visita:  #	"
		},

		{
			"type": 1,
			"obs" : " RETORNO",
			"response": " Cliente relata que a conexão está normalizada. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas. <hr> <b> Protocolo referente: XXXX. </b>"
		},


			/* FALTA DE CONEXÃO RELACIONADO A PENDÊNCIAS */

		{
			"type": 2,
			"obs" : " DESBLOQUEADO, MAS COM IP DE BLOQUEIO",
			"response": " Identificado IP de bloqueio. Solicitado reinício de 15 minutos. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas."
		},

		{
			"type": 2,
			"obs" : " 3001 INDISPONÍVEL ",
			"response": "Cliente relata falta de conexão. Identificado bloqueio 3001. Informado sobre o bloqueio. Cliente solicitou o desbloqueio da conexão. Ciente de que não é possível liberar o acesso em sistema, uma vez que já fora concedido o desbloqueio por 5 dias corridos. Repassados os valores atualizados e prazos das pendências, assim como as formas de pagamento disponíveis, sem mais dúvidas.\nPendência(s): XX com valor atualizado de R$XX."
		},


		{
			"type": 2,
			"obs" : " 3001 INDISPONÍVEL ",
			"response": " Cliente relata falta de conexão após o pagamento da pendência. Identificado bloqueio 3001. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 2,
			"obs" : " 3001 DISPONÍVEL<h4 style='color: red;'>5 dias corridos</h4>",
			"response": " Cliente relata falta de conexão após o pagamento da pendência. Identificado bloqueio 3001. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Realizado desbloqueio da conexão. Solicitado reinício de 15 minutos. Ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		/***************(INFORMAÇÕES SOBRE VISITA TÉCNICA)***************/

		{
			"type": 3,
			"obs" : " INFORMAÇÃO - DENTRO DO PRAZO",
			"response": "Cliente solicita informação sobre a visita técnica referente ao protocolo XXXX. Instruído a aguardar a visita ocorrer, uma vez que está dentro do prazo máximo e em execução. Sem mais dúvidas."
		},

		{
			"type": 3,
			"obs" : " INFORMAÇÃO - AGENDADA",
			"response": "Cliente solicita informação sobre a visita técnica referente ao protocolo XXX. <hr> Instruído a aguardar a visita ocorrer, uma vez que em sistema fora anexada a informação pelo escritório local que ocorrerá no dia de XX/XX."
		},

		{
			"type": 3,
			"obs" : " INFORMAÇÃO - ESCRITÓRIO INDISPONÍVEL",
			"response": "Cliente solicita informação sobre a visita técnica referente ao protocolo XXXX. <hr> Escritório indisponível para verificação. Solicitado posterior contato em horário comercial para fins de confirmação. Sem mais dúvidas."
		},

	
		/******************(DESBLOQUEIO)******************/

		{
			"type": 4,
			"obs" : " DESBLOQUEIO INDISPONÍVEL-(PAGA)",
			"response": " Cliente entrou em contato solicitando o desbloqueio da conexão. Identificado bloqueio 3001. Cliente relata que o pagamento já foi realizado. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Ciente também que não é possível liberar o acesso em sistema, uma vez que já fora concedido o desbloqueio por 5 dias corridos. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 4,
			"obs" : " DESBLOQUEIO 3001 INDISPONÍVEL",
			"response": "Cliente solicita desbloqueio da conexão. Identificado bloqueio 3001. Ciente de que não é possível liberar o acesso em sistema, uma vez que já fora concedido o desbloqueio por 5 dias corridos. Repassados os valores atualizados e prazos das pendências, assim como as formas de pagamento disponíveis, sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},


		{
			"type": 4,
			"obs" : " DESBLOQUEIO DISPONÍVEL<h4 style='color: red;'>5 dias corridos</h4>",
			"response": "Cliente entrou em contato solicitando o desbloqueio da conexão, ciente dos valores em pendência assim como o prazo de 5 dias corridos do desbloqueio. Orientado a realizar o reinicio manual do equipamento durante 15 minutos. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		

		{
			"type": 4,
			"obs" : " DESBLOQUEIO VERDE INDISPONÍVEL",
			"response": "Cliente solicita desbloqueio da conexão. Identificado bloqueio verde. Ciente de que não é possível liberar o acesso em sistema e ciente dos valores atualizados e prazos das pendências. Repassadas as formas de pagamento disponíveis, sem mais dúvidas.\nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 4,
			"obs" : " DESBLOQUEIO VERIFICADO COM A SUPERVISÃO<h4 style='color: red;'>Verificar SLA</h4>",
			"response": "Cliente solicita desbloqueio do acesso mediante a confirmação de pagamento. Ciente de que será verificado com o setor responsável para fins de verificação e possível liberação da conexão. Instruído a aguardar o procedimento. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},



		

		/******************(SOLICITAÇÕES DE ALTERAÇÃO)******************/

		{		
			"type": 5,
			"obs" : " TRANSFERÊNCIA DE ENDEREÇO <h4 style='color: red;'>7 dias úteis</h4><h4 style='color: blue;'>Grupo InstAnt</h4",
			"response": "Cliente solicita transferência de endereço. Ciente do prazo máximo de 7 dias úteis para ocorrer, assim como da taxa de R$ 50,00 / R$ 100,00(podendo parcelar em duas vezes de R$ XXX). Ciente que deve levar os equipamentos para o novo endereço. <hr> <b> Novo endereço: " + altAddress.value + ", nº " + altAdressNumber.value + ", " + altDistrict.value + ", "+ altCity.value+ "("+ altHouseType.value +")"+ "</b> <hr> Ponto de referência: " + altReference.value +". Melhor turno: " + altBestTime.value +" "+"." +altAlreadyMoved.value +"<hr>Confirmada a disponibilidade por: "+ altAvailability.value + "\n\n\nRUA: \nNUMERO: \nBAIRRO: \nCIDADE: \nCEP: \nPONTO DE REF.: \nTELEFONE: \nMELHOR HORARIO PARA CONTATO: \nGRUPO: InstAnt"
		},

		{
			"type": 5,
			"obs" : " ALTERAÇÃO DO WI-FI",
			"response": "Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo IP padrão. Alteração feita com sucesso. Sem mais dúvidas."
		}, 

		{
			"type": 5,
			"obs" : " MUDANÇA DE CÔMODO<h4 style='color: red;'>7 dias úteis</h4><h4 style='color: blue;'>Grupo InstAnt+Cidade</h4>",
			"response": "Cliente solicita mudança de cômodo. Ciente do prazo máximo de 7 dias úteis para ocorrer, assim como da taxa de R$ 50,00 (NÃO AMPARO podendo parcelar em duas vezes de R$ XXX). <hr> Ponto de referência: xx. Melhor turno: xx"
		}, 
		
		{
			"type": 5,
			"obs" : " ALTERAÇÃO DO VENCIMENTO",
			"response": "Cliente solicita alteração da data de vencimento das faturas para o dia XX de cada mês. Instruído a fazer alteração no site da empresa. Feito passo a passo. Sem mais dúvidas"
		}, 
		
		{
			"type": 5,
			"obs" : " ALTERAÇÃO DO PLANO",
			"response": "Cliente solicita alteração no plano de assinatura. Informado que para realizar a alteração do plano, deve-se encaminhar um e-mail para: *novoplano@fasternet.com.br*, informando seus dados pessoais e o plano que deseja contratar ou se preferir, poderá solicitar a alteração pessoalmente no escritório de sua região. Ciente dos planos e valores comercializados. Sem mais dúvidas."
		}, 

		/*
		{		
			"type": 5,
			"obs" : " TRANSFERÊNCIA DE ENDEREÇO <h4 style='color: red;'>7 dias úteis</h4><h4 style='color: blue;'>Grupo InstAnt</h4",
			"response": "Cliente solicita transferência de endereço. Ciente do prazo máximo de 7 dias úteis para ocorrer, assim como da taxa de R$ 50,00 / R$ 100,00(podendo parcelar em duas vezes de R$ XXX). Ciente que deve levar os equipamentos para o novo endereço. <hr> <b> Novo endereço: XXXXXX. </b> <hr> Ponto de referência: XXXXX. Melhor turno: XXX. <hr> Última visita:  #\n\n\nRUA: \nNUMERO: \nBAIRRO: \nCIDADE: \nCEP: \nPONTO DE REF.: \nTELEFONE: \nMELHOR HORARIO PARA CONTATO: \nGRUPO: InstAnt"
		},




		/*****************(PROBLEMA EXTERNO)*****************/

		{
			"type": 6,
			"obs" : " teste",
			"response": "Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer. Sem mais dúvidas. <hr>"
		},

		{
			"type": 6,
			"obs" : " teste",
			"response": "Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer e ciente de que será feito posterior contato após a normalização. Sem mais dúvidas. <hr>"
		},

		{
			"type": 6,
			"obs" : " teste",
			"response": "Cliente relata falta de conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer e ciente de que será feito posterior contato após a normalização. Sem mais dúvidas. <hr> <b> OBSERVAÇÃO: </b> Não foi possível copiar e colar a mensagem sobre o problema externo que consta no relatório por problemas de instabilidade."
		},

		{
			"type": 6,
			"obs" : " teste",
			"response": "Cliente relata lentidão na conexão. Identificado problema externo. Instruído a aguardar o reparo técnico ocorrer e ciente de que se o problema persistir, poderá ser feito novo contato. Sem mais dúvidas. "
		},

		{
			"type": 6,
			"obs" : " teste",
			"response": "Verificado com o NOC. Encaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer. <b> OBSERVAÇÃO: </b> Verificar a possibilidade de trocar o roteador, conforme instruído pelo NOC. <hr> Ponto de referencia: XXX. Melhor turno: XXX. <hr> Última visita:  #"
		},

		/*****************(SEGUNDA VIA DO BOLETO)******************/

		{
			"type": 7,
			"obs" : " teste",
			"response": "Cliente solicita segunda via do boleto. Instruído a retirá-lo no site da empresa. Sem mais dúvidas.\nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 7,
			"obs" : " teste",
			"response": "Cliente solicita segunda via do boleto. Instruído a retirá-lo no site da empresa. Feito o passo a passo, sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 7,
			"obs" : " teste",
			"response": "Cliente solicita segunda via do boleto. Instruído a retirá-lo no site da empresa ou via whatsapp. Ciente do passo a passo a ser realizado. Sem mais dúvidas. \nPendência(s): XX com valor atualizado de R$XX"
		},

		{
			"type": 7,
			"obs" : " teste",
			"response": "Cliente solicita informação sobre os boletos recebidos, onde fora informado de que há pendências em aberto. Ciente de que se trata de uma medida de segurança adotada pela empresa com objetivo de adiantamento das faturas. Repassados os valores e prazos, assim como as formas de pagamento disponíveis. Sem mais dúvidas.\nPendência(s): XX com valor atualizado de R$XX"
		},



		/******************(PAGAMENTO)******************/

		{
			"type": 8,
			"obs" : " teste",
			"response": " Cliente solicita informação sobre as formas de pagamento disponíveis. Ciente das informações, instruído a retirá-lo no site da empresa e pagar as pendências de forma on-line. Sem mais dúvidas."
		}, 

		{
			"type": 8,
			"obs" : " teste",
			"response": " Cliente solicita negociação das pendências. Ciente de que tal verificação deverá ser feita diretamente no escritório local ou via e-mail pelo (contato@fasternet.com.br). Ciente dos valores e prazos das pendências em atraso, assim como das formas de pagamento disponíveis. Sem mais dúvidas.\nPendência(s): XX com valor atualizado de R$XX"
		}, 

		{
			"type": 8,
			"obs" : " teste",
			"response": "Cliente relata que recebeu a ligação da Central de Atendimento e questiona o porquê. Ciente de que se trata de um contato do setor de Relacionamento referente a PROMO de renovação contratual,  sendo necessário aguardar um novo retorno. Atualizados os dados para contato. Sem mais dúvidas."
		}, 


		/******************(CANCELAMENTO)******************/

		{
			"type": 9,
			"obs" : " teste",
			"response": "Cliente solicita cancelamento da conexão. Ciente de que tal procedimento deve ser tratado diretamente com o titular da conta. Solicitado novo contato. Sem mais dúvidas. "
		}, 

		{
			"type": 9,
			"obs" : " teste",
			"response": "Cliente solicita cancelamento da assinatura. Ciente de que há pendências em atraso e que é necessário quitá-las para fazer o pedido de cancelamento. Repassados os valores e prazos atualizados com juros, assim como as formas de pagamento disponíveis. Sem mais dúvidas."
		},

		{
			"type": 9,
			"obs" : " teste",
			"response": "Cliente solicita cancelamento da conexão. Informado de que tal solicitação será repassada para o setor responsável, que fará posterior contato para fins de conclusão/negociação. Cliente ciente da solicitação em sistema, sem mais dúvidas. <hr> <b> Motivo do cancelamento: </b> "
		} ,

		/******************(MONTAGEM DE REDE)******************/

		{
			"type": 10,
			"obs" : " teste",
			"response": "Cliente solicita montagem de rede.\n\n- Ciente dos valores\n- Rede: R$ 105,00\n- Configuração de roteador: R$ 35,00\nTOTAL: R$ 140,00 (PARCELAR EM XX DE R$ XX,XX)"
		} ,


		/******************(VENDAS INTERNET)******************/
		{
			"type": 11,
			"obs" : " teste",
			"response": "Cliente solicita informação sobre planos e disponibilidade. Repassado os valores, taxa de instalação e prazo. Cliente informa que irá pensar a respeito e retornar o contato posteriormente. Sem mais."
		},
		

		{
			"type": 11,
			"obs" : " Venda passada ao escritório<h4 style='color: red;'>GRUPO VENDAS</h4>",
			"response": "Cliente solicita informações sobre disponibilidade de planos e valores no endereço informado. <hr> <b> Endereço: " + priceAddress.value + ", numero " +  priceAdressNumber.value + ", "+ priceDistrict.value + ", "+ priceCity.value + " - " + priceReference.value +"("+ priceHouseType.value + ")" +". </b> Verificar com o escritório local e retornar no n° "+ pricePhoneNumber.value +" - falar com o(a) " + priceHolder.value + ". " + priceBestTime.value +". Sem mais dúvidas.\n\nOs planos disponíveis para sua localidade são:\n\n- FIBRA 200 MEGAS: R$ 109,00\n- FIBRA 300 MEGAS: R$129,00  \n- FIBRA 500 MEGAS: R$149,00 \n- FIBRA 1 GIGA: R$219,00\n\nNossos clientes recebem os boletos por e-mail e SMS. Dessa maneira, contribuímos com o meio-ambiente. Além do mais, os boletos também ficarão disponíveis em nosso site: www.fasternet.com.br\n\n\nASSUNTO:Vendas – Cidade / Informações TV Faster – Cidade.\n\n"
		},



		// var priceAddress = document.getElementById("priceAddress");
		// var priceDistrict = document.getElementById("priceDistrict"); //melhor turno
		// var priceAdressNumber =  document.getElementById("priceNumber"); //ponto de referência
		// var priceCity = document.getElementById("priceCity"); //cidade
		// var priceHouseType = document.getElementById("priceHouseType"); //tipo de residencia
		// var priceReference = document.getElementById("priceReference"); //ponto de referencia
		// var priceHolder = document.getElementById("priceHolder"); //responsável
		// var pricePhoneNumber = document.getElementById("pricePhoneNumber"); //telefone para contato
		// var priceBestTime = document.getElementById("priceBestTime"); //melhor horário
		// var priceCPF = document.getElementById("cpf");

		/******************(VENDAS TV)******************/

		{
			"type": 12,
			"obs" : " teste",
			"response": "Cliente deseja informação sobre os serviços de TV. Ciente de que será verificado e feito posterior retorno pelo setor responsável com as informações necessárias, sendo necessário aguardar. Solicitado retorno no nº (XX)9 XXXX-XXXX, falar com Fulano.\n\nASSUNTO: Vendas - Vendas – (cidade)"
		},

		{
			"type": 12,
			"obs" : " teste",
			"response": "Caso atendam clientes que demonstrem interesse em contratar o novo serviço, deve-se informar que será aberto um protocolo para que o setor responsável entre em contato posteriormente com as ofertas. \n\nAssunto: Informações TV Faster - Cidade\nDescrição: Cliente demonstra interesse no serviço\n\nGrupo: Vendas"
		},         

		{
			"type": 12,
			"obs" : " teste",
			"response": "Caso atendam clientes que demonstrem interesse em contratar o novo serviço, deve-se informar que será aberto um protocolo para que o setor responsável entre em contato posteriormente com as ofertas. \n\nAssunto: Informações TV Faster - Cidade\nDescrição: Cliente demonstra interesse no serviço\n\nGrupo: Vendas"
		}, 


		/******************(VERIFICAÇÃO SPARK)******************/



		{
			"type": 13,
			"obs": " Rompimento de cabos/possível problema externo a ser verificado no UNM:",
			"response": "\n FHTT: \n Usuário: \n Cidade: \n Autenticação: \n Plano: \n Endereço: \n Motivo da verificação: \n Nome e n° de telefone do cliente que entrou em contato:"
		},

		{
			"type": 13,
			"obs": " Relacionados ao suporte técnico, mas sem cabos rompidos (padrão NOC):",
			"response": "\n FHTT: \n Usuário: \n Cidade: \n Autenticação: \n Plano: "
		},

		{
			"type": 13,
			"obs": " Casos gerais não relacionados a suporte técnico:",
			"response": "\n Usuário: \n Protocolo: \n Verificação: "
		}, 

		/******************(CANCELAMENTO DA VISITA TÉCNICA)******************/

		{
			"type": 14,
			"obs" : " CANCELAMENTO DA VISITA TÉCNICA",
			"response": "Cliente solicita cancelamento da visita, pois sua conexão normalizou. Ciente de que o protocolo de número XXXXXX será concluído em sistema. Sem mais dúvidas."
		}, 


		/******************(ERRO DE ABERTURA)******************/

		{
			"type": 15,
			"obs" : " ASSUNTO INCORRETO",
			"response": "Protocolo cancelado por erro de abertura, pois o assunto estava incorreto, considerar o protocolo: XXXX."
		}, 

		{
			"type": 15,
			"obs" : " DESCRIÇÃO INCORRETA",
			"response": "Protocolo cancelado por erro de abertura, pois a descrição estava incorreta, considerar o protocolo: XXXX."
		}, 
		

	]
}



updateConstData(); //atualiza as respostas com as informações digitadas


function foo() {
    var variavel = (window.getSelection().toString());
    console.log(variavel);	
}

foo();


//cria mascara de CPF e CNPJ e cria campo para tipo de cargo
cCpf.addEventListener("keyup", function(){
	//console.log(cCpf.value);
	let conteinerAux  = document.querySelectorAll(".conteiner")[1];
	let cRuler = conteinerAux.querySelector(".cRuler");

	cpf = cCpf.value.split(" ").join("");


	if(cpf.length == 11){
		console.log("CPF");
		if( conteinerAux.querySelector(".cRuler") ){
			conteinerAux.removeChild( cRuler );

		}
	}
	else if(cpf.length > 11){
		if( !conteinerAux.querySelector(".cRuler") ){
			let cFunction = document.createElement("input");
			cFunction.placeholder = "Cargo ou Função";
			cFunction.classList.add("cRuler");
			conteinerAux.appendChild(cFunction);

		}
		
	}
})


//Função de retira os espaços em branco
const removeSpacesFromString = (text) => { 
            let text1 =  text; 
          
            let text2 = text1.split(" ").join(""); 
          
            return text2;
        } 




// altera o botão de vendas na opção vendas
priceCity.addEventListener("keyup", function(){
	let city =  priceCity.value
	console.log(city)
	document.getElementById("btnTV").innerHTML = "Informações TV Faster – " + city
	document.getElementById("btnNet").innerHTML = "Vendas – " + city
})


// busca as informações de endereço
function loadAddress(input, el_parent){
    const cep = input.replace(/\D/g, '');
    const url = 'https://viacep.com.br/ws/'+ cep +'/json';
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    }
    
	console.log(el_parent);
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
		region(data.localidade)
								el_parent.querySelector("._Address").value = data.logradouro;
								el_parent.querySelector("._District").value = data.bairro;
								el_parent.querySelector("._City").value = data.localidade;
								el_parent.querySelector("._HouseType").value = data.complemento;
								
								if(el_parent.id == "sales"){
									if(data.localidade != "" && data.localidade !=  null){
										document.getElementById("btnTV").innerHTML = "Informações TV Faster – " + data.localidade
										document.getElementById("btnNet").innerHTML = "Vendas – " + data.localidade
									}
								}
						}
        )
}



//busca região

function region(city){
	let regAmparo = ["Amparo", "Serra Negra", "Pedreira", "Monte Alegre do Sul", "Santo Antônio de Posse" , "Lindoia"];
	
	console.log(city)
	if( regAmparo.includes( city) ){
		console.log("Cidade pertence a amparo ", city);
	}

	
	

}



//copia o assunto para área de transferência

function copySubject(el, el_parent){
	console.log(el_parent)

	let textArea = document.createElement("textarea");
	textArea.classList.add("info-Temp");
	textArea.innerHTML = el.innerHTML
	
	el_parent.appendChild(textArea);	
    
	textArea.select();
    	document.execCommand("copy");
    	alert("O texto é: " + textArea.value);

	let infoTemp = document.querySelector(".info-Temp");

	if( document.body.contains(infoTemp) ){
		el_parent.removeChild(infoTemp)
	}
	
}



//usada para apagar as respostas já criadas
function cleanResponses(){
	let div = document.getElementById("responses");
	div.innerHTML = " ";
}


//gera as respostas
function getResponses(index){
	cleanResponses(); 
	updateConstData();
	//console.log(problems[0], index);

	cData.forEach(function(item){
		//console.log(index)
		if( index == item.type){
			//generateResponses(problems[index], item.response);
			generateResponses(item.obs, item.response);
		}
	});
			
}


function generateProblemSelect(){
	problems.forEach(function(item){
		console.log(item);
	});
}



//obtém o mês atual
function getMonth(){
	let month = "" + (date.getMonth() + 1)
	// console.log(month.length, month)
	if( month.length  < 2 ){
		return ( "\/0" + (date.getMonth() + 1) );
	}else{
		// return ( "\/0" + (date.getMonth() + 1) ); 
		return ( (date.getMonth() + 1) ); 
	}
}

//obtém o dia atual
function getDay(){
	if( date.getDate() < 10 ){
		let day = "0";
		return ( day.toString() + date.getDate() );
	}else{
		return ( date.getDate() ); 
	}
}







function coppy(el) {
	console.log(el)
    el.select();
    el.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto é: " + el.value);
    //console.log(el);
}


function generateResponses(type, resp ){
	let el = document.createElement("textarea");
	let div = document.createElement("div");
	let label = document.createElement("label");
	//var btn = document.createElement("button");
	div.innerHTML = "<button onclick='coppy(this.parentElement.children[2])'>Copiar</button>";

	let conteinerAux  = document.querySelectorAll(".conteiner")[1];
	let cRuler = document.querySelector(".cRuler");

	if(conteinerAux.querySelector(".cRuler")){
		el.innerHTML = day + " → Atendimento realizado com Sr.(a) " + cName.value + " ("+ cRuler.value + ") no n°"+ phoneNumber.value + ". " + cRequest.value + resp;
	}else{
		el.innerHTML = day + " → Atendimento realizado com Sr.(a) " + cName.value + " no n°"+ phoneNumber.value + ". " + cRequest.value + resp;
	}


	
	label.innerHTML = type;
	div.appendChild(label);
	div.appendChild(el);
	//div.appendChild(btn);
	document.getElementById("responses").appendChild(div);
}




function activateBtn(el){
	document.getElementById("submit").removeAttribute("hidden");
}

function expand(el, parent){
	document.getElementById(el).classList.toggle("hide-div-child");
	parent.classList.toggle("hide-div-parent");
}


/*  BUSCAR ENDEREÇO PELO CEP

function loadAddress(value) {
  var xhttp = new XMLHttpRequest();
  var link = "viacep.com.br/ws/"+value+"/json/";

  console.log(link);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "link", true);
  xhttp.send();

  console.log(xhttp.responseText);
}

*/