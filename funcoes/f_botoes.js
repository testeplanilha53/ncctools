//Autor: Lucas Aguiar
//Ultima edição: 12/01/2023

//document.getElementsByTagName("body")[0].style.cursor = "url('https://cursor.style/cursors/2047-harry-potter-cursor.svg'), auto";

// Variáveis principais

var protocolo_chat = window.document.getElementById("protocolo_chat")
var protocolo_adm = window.document.getElementById("protocolo_adm")
var nome_cliente = window.document.getElementById("nome_cliente")
var telefone = window.document.getElementById("telefone")
var bfp = window.document.getElementById("bfp")
var descricao = window.document.getElementById("descricao")
var h_preferencia = window.document.getElementById("h_preferencia")
var ponto_referencia = window.document.getElementById("ponto_referencia")

var b_protocolo = window.document.getElementById("Protocolo")
var b_copiar = window.document.getElementById("Copiar")
var b_tranferir = window.document.getElementById("Transferir")
var b_apagar = window.document.getElementById("Apagar")



/// Busca pendência se tiver salva no banco 
function salvar_pendencia(){
    var question = window.confirm("Deseja salvar a pendência?")
    var descricao = document.getElementById("descricao").value
    var numero_protocolo = document.getElementById("protocolo_chat").value
    var adm_protocolo = document.getElementById("protocolo_adm").value
    var params = params = 'number_protocol='+numero_protocolo+'&description='+descricao+'&adm_protocol='+adm_protocolo
    
    if( descricao.trim() !== "" && numero_protocolo.trim() !== "" && adm_protocolo.trim() !== "" ){
	
    	let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var retorno = this.responseText;
			console.log("=" + retorno);

                        
                    }
		  }
                  xhttp.open("POST", "./app.php?action=setDataProtocol&", true);
	    	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send(params);
    }else{
    	 window.confirm("Protocolo do chat, adm e a descrição são obrigatórios")
    }   
    console.log(params)
}



function buscar_pendencia(){
    var numero_protocolo = document.getElementById("protocolo_chat").value
     var descricao = document.getElementById("descricao")
     var adm_protocolo = document.getElementById("protocolo_adm") 
    if( numero_protocolo !== "" ){
    	let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        //notification.innerHTML = this.responseText;
                        let pendencia = JSON.parse( this.responseText );
			console.log(pendencia );
			    
			if(pendencia != false){
				if( pendencia[0].number_protocol == numero_protocolo ){
			 		var question = window.confirm("Existe uma pendência salva para esse protocolo")  
			        	descricao.value = pendencia[0].description
					adm_protocolo.value = pendencia[0].adm_protocol
				 }
			}    
                    }
                  };
                  xhttp.open("POST", "./app.php?action=getDataProtocol", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("number_protocol="+numero_protocolo);
     }
}



            

/// 

// COPIA O PROTOCOLO DO ADM AO CLICAR
function copiar_protocolo_adm(){
    
    if (protocolo_adm.value != "") {
        // Passando as informações para a área de transferência
        navigator.clipboard.writeText(protocolo_adm.value);

        // Exibindo a notificação de texto copiado por 2 segundos
        let notificacao = document.getElementById("notificacao")
        notificacao.innerHTML = '<div class="alert alert-secondary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Protocolo do ADM copiado com sucesso!</strong> </div>'
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 1000);
    }

}


function copiar_nome_cliente(){
    
    if (nome_cliente.value != "") {
        // Passando as informações para a área de transferência
        navigator.clipboard.writeText(nome_cliente.value);

        // Exibindo a notificação de texto copiado por 2 segundos
        let notificacao = document.getElementById("notificacao")
        notificacao.innerHTML = '<div class="alert alert-secondary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Nome do cliente copiado com sucesso!</strong> </div>'
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 1000);
    }

}


// Mudar o titulo
function mudar_titulo(){
    
    mudar_tema_link()

    var titulo = window.document.getElementById("titulo")
    if (nome_cliente.value!=''){
        titulo.innerText = nome_cliente.value
    }

    cpf_corrigir();
    //tema_change();

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    if (notificacao.innerHTML != '') {
        window.setTimeout(function () {
            notificacao.innerHTML = ""
        }, 5000);
    }    

    
}



//  Função Apagar
//      Questiona se o usuário deseja apagar.
//      Se sim → apaga os campos
//      Se não → Não faz nada

function Apagar(){
    var question = window.confirm("Deseja apagar?")
    // O if é executado se question==true 
    if (question){
        protocolo_chat.value = ''
        protocolo_adm.value = ''
        nome_cliente.value = ''
        telefone.value = ''
        bfp.value = 'Padrão Fibra'
        descricao.value = ''
        h_preferencia.value = ''
        ponto_referencia.value = ''

        // Mostra a notificação do bootstrap
        let notificacao = document.getElementById("notificacao")
        notificacao.innerHTML = '<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>EXCLUÍDO!</strong>  </div>'

        // Tempo de 2 segundos para a notificação sumir
        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 2000);
    }
}


//  Função Máscara para o número de contato
/*
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}

window.onmousemove = function(){
    id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}    
}*/


/*
// Função protocolo
function protocolo(){
    
    // Nessa parte do código ele ira criar uma variável "trecho", com o texto até a PONTO_OU_VIRGULA="."
    descricao_aux = descricao.value // pegando o valor
    let tamanho = descricao_aux.length // pegando o tamanho do "vetor"
    // let PONTO_OU_VIRGULA = "."
    let PONTO_OU_VIRGULA = localStorage.getItem('txt_key_protocolo')
    let posi = 0
    var trecho = ""
    for (var i = 0; i < tamanho; i++){                     
        if (descricao_aux[i]==PONTO_OU_VIRGULA){
            posi = i  
            break
        }
        trecho = trecho + descricao_aux[i]                 
    }        
    
    // Montando o texto padrão para colar no ADM
    let texto_completo = `${trecho}<hr><b><font color=blue> Protocolo do Chat: ${protocolo_chat.value} </b></font><hr>`
    
    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto_completo);
    
    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-warning" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

}*/


// Função protocolo novo 2023
function protocolo(){
    
	if (protocolo_chat.value == '' || protocolo_chat.value == null){
		// Nessa parte do código ele ira criar uma variável "trecho", com o texto até a PONTO_OU_VIRGULA="."
    descricao_aux = descricao.value // pegando o valor
    let tamanho = descricao_aux.length // pegando o tamanho do "vetor"
    // let PONTO_OU_VIRGULA = "."
    let PONTO_OU_VIRGULA = "";
    
    
    console.log(  localStorage.getItem('txt_key_protocolo')  )
    
    if( localStorage.getItem('txt_key_protocolo') == "op1" ){
        PONTO_OU_VIRGULA = ".";
    }
    if( localStorage.getItem('txt_key_protocolo') == "op2" ){
        PONTO_OU_VIRGULA = ",";
    }
    if( localStorage.getItem('txt_key_protocolo') == "op3" ){
        PONTO_OU_VIRGULA = ";";
    }
    
    
    let posi = 0
    var trecho = ""
    for (var i = 0; i < tamanho; i++){                     
        if (descricao_aux[i]==PONTO_OU_VIRGULA){
            posi = i  
            break
        }
        trecho = trecho + descricao_aux[i]                 
    }        
    

	
	
    	// Montando o texto padrão para colar no ADM
   	 let texto_completo = `${trecho}<hr>`
    
    	// Passando as informações para a área de transferência
    	navigator.clipboard.writeText(texto_completo);
     	//copyToClipboard(texto_completo)
    
    	// Exibindo a notificação de texto copiado por 2 segundos
    	let notificacao = document.getElementById("notificacao")
    	notificacao.innerHTML = '<div class="alert alert-warning" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'
   	 window.setTimeout(function() {
        	$(".alert").fadeTo(500, 0).slideUp(500, function(){
            	$(this).remove(); 
        	});
    	}, 2000);
	
	}else{

    // Nessa parte do código ele ira criar uma variável "trecho", com o texto até a PONTO_OU_VIRGULA="."
    descricao_aux = descricao.value // pegando o valor
    let tamanho = descricao_aux.length // pegando o tamanho do "vetor"
    // let PONTO_OU_VIRGULA = "."
    let PONTO_OU_VIRGULA = "";
    
    
    console.log(  localStorage.getItem('txt_key_protocolo')  )
    
    if( localStorage.getItem('txt_key_protocolo') == "op1" ){
        PONTO_OU_VIRGULA = ".";
    }
    if( localStorage.getItem('txt_key_protocolo') == "op2" ){
        PONTO_OU_VIRGULA = ",";
    }
    if( localStorage.getItem('txt_key_protocolo') == "op3" ){
        PONTO_OU_VIRGULA = ";";
    }
    
    
    let posi = 0
    var trecho = ""
    for (var i = 0; i < tamanho; i++){                     
        if (descricao_aux[i]==PONTO_OU_VIRGULA){
            posi = i  
            break
        }
        trecho = trecho + descricao_aux[i]                 
    }        
    

	
	
    	// Montando o texto padrão para colar no ADM
   	 let texto_completo = `${trecho}<hr><b><font color=blue> Protocolo do Chat: ${protocolo_chat.value} </b></font><hr>`
    
    	// Passando as informações para a área de transferência
    	navigator.clipboard.writeText(texto_completo);
     	//copyToClipboard(texto_completo)
    
    	// Exibindo a notificação de texto copiado por 2 segundos
    	let notificacao = document.getElementById("notificacao")
    	notificacao.innerHTML = '<div class="alert alert-warning" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'
   	 window.setTimeout(function() {
        	$(".alert").fadeTo(500, 0).slideUp(500, function(){
            	$(this).remove(); 
        	});
    	}, 2000);
		

	}//end if

}

// Função copiar
function copiar(){
	
    if (protocolo_chat.value == '' || protocolo_chat.value == null){
		// Coletando a data atual para registrar no protocolo
    let data = new Date()
    //let dia = data.getUTCDate() //alterei aqui
    let dia = data.getDate()
    let mes = data.getMonth()+1
    if (dia<10){
        dia = String(dia)
        dia = '0'+dia
    }
    if (mes<10){
        mes = String(mes)
        mes = '0'+mes
    }
    dia = String(dia)
    mes = String(mes)
    
    // Montando o texto padrão para colar no ADM
    let texto_completo = `${dia}/${mes}→ Atendimento realizado com Sr(a). ${nome_cliente.value} via chat no número ${telefone.value}. <br> ${descricao.value}`
    
    // Condição em caso de VS
    // Se tiver o horario de preferência e o ponto de referência ele adiciona as informações no texto
    
    var h_preferencia = window.document.getElementById("h_preferencia")
    if (ponto_referencia.value!=h_preferencia.value){                
        var texto_vs = `<hr> <b>Horário de preferência:</b> ${h_preferencia.value} <br> <b>Ponto de referência:</b> ${ponto_referencia.value} <hr>` 
        texto_completo = texto_completo + texto_vs
    }

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto_completo)    
    
    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-success" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);
	
	}else{
    
    // Coletando a data atual para registrar no protocolo
    let data = new Date()
    //let dia = data.getUTCDate() //alterei aqui
    let dia = data.getDate()
    let mes = data.getMonth()+1
    if (dia<10){
        dia = String(dia)
        dia = '0'+dia
    }
    if (mes<10){
        mes = String(mes)
        mes = '0'+mes
    }
    dia = String(dia)
    mes = String(mes)
    
    // Montando o texto padrão para colar no ADM
    let texto_completo = `<b><font color=blue>Protocolo do Chat: ${protocolo_chat.value} </b></font><hr> <b><font color=blue>	${bfp.value} </b></font><hr> ${dia}/${mes}→ Atendimento realizado com Sr(a). ${nome_cliente.value} via chat no número ${telefone.value}. <br> ${descricao.value}`
    
    // Condição em caso de VS
    // Se tiver o horario de preferência e o ponto de referência ele adiciona as informações no texto
    
    var h_preferencia = window.document.getElementById("h_preferencia")
    if (ponto_referencia.value!=h_preferencia.value){                
        var texto_vs = `<hr> <b>Horário de preferência:</b> ${h_preferencia.value} <br> <b>Ponto de referência:</b> ${ponto_referencia.value} <hr>` 
        texto_completo = texto_completo + texto_vs
    }

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto_completo)    
    
    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-success" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);
		
		
	}//end if

}


// Função CPF
function x(){

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_cpf');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-dark" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>CPF COPIADO COM SUCESSO!</strong></div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

}

function cpf_corrigir(){
    var cpf = document.getElementById("btn_cpf").innerText
    if (cpf==""){
        document.getElementById("btn_cpf").innerText = "CPF"
    }
}

function cpf(){

    navigator.clipboard
    .readText()
    .then((clipText) => (document.getElementById("btn_cpf").innerText = clipText));
    
    // Essa função é executada após 0,1s
    setTimeout(function(){
        // Cria a variável cpf
        var cpf = document.getElementById("btn_cpf").innerText
    
        // Deixa apenas os números no CPF
        cpf = cpf.replace(/[^0-9]/g,'')
        cpf = String(cpf)
        
        // Deixa o CPF corrigido no título do botão
        document.getElementById("btn_cpf").innerText = cpf

        // Salva o CPF corrigido no localStorage, para ser copiado em outra função
        localStorage.setItem('txt_cpf', cpf)        
   },100);
   
}



// FUNÇAO BOTÕES DE ATALHO

function atalho1() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho1');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}



function atalho2() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho2');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}



function atalho3() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho3');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}


function atalho4() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho4');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}

function atalho5() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho5');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}

function atalho6() {

    // Pegando a informação do local Storage
    var atalho = localStorage.getItem('txt_atalho6');

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(atalho)

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Atalho copiado com sucesso!</strong> </div>'
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
}


function transferir(){
    var area_transferencia
    var data = navigator.clipboard.readText().then(function(dados) {        
        // tenho que programar tudo dentro dessa função
        console.log("Your string: ", dados);        
        area_transferencia = String(dados)

        //Remove as quebras de linha do texto
        area_transferencia = area_transferencia.replace(/(\r\n|\n|\r)/gm, "");
        //window.alert(area_transferencia)

        var protocolo_chat = window.document.getElementById("protocolo_chat")
        var nome_cliente = window.document.getElementById("nome_cliente")
        var telefone = window.document.getElementById("telefone")

        var p_nome = dados.search("Nome:")
        var p_telefone = dados.search("Telefone:")
        var p_email = dados.search("E-mail:")
        var p_numProtocolo = dados.search("Número de protocolo:")
        var p_classificacao = dados.search("Classificação:")

        nome_cliente.value = (dados.substring(p_nome+6,p_telefone)).replace("?","")
        telefone.value = (dados.substring(p_telefone+12,p_email)).replace(/[^0-9]/g,'')
        protocolo_chat.value = (dados.substring(p_numProtocolo+20,p_classificacao)).replace(/[^0-9]/g,'')
	    
	buscar_pendencia();    
	    
    });  
}


function fun_h_preferencia(){
    var hpfr = window.document.getElementById("hpfr")
    var h_preferencia = window.document.getElementById("h_preferencia").value
    
    
    if (h_preferencia == "Outro"){
        hpfr.innerHTML = `<input type="input" id="h_preferencia" Placeholder="Digite aqui o horário...">`
        
    }

}

function mudar_tema(){  
    var tema = localStorage.getItem('tema')
    if (tema=="tema_claro"){        
        tema_escuro()
    } else {        
        tema_claro()
    }
}

window.addEventListener("load", ()=>{                
    var tema = localStorage.getItem('tema')
    //alert(tema)
    if (tema=="tema_claro"){        
        tema_claro()
    } else {
        tema_escuro()
    }

})


function tema_claro(){
    var t1 = document.getElementById("t1")
    var t2 = document.getElementById("t2")
    var tema = localStorage.getItem('tema')
     
    localStorage.setItem('tema', "tema_claro")   
    console.log(tema)               
    document.body.style.background = "#BDC3C7" //Cinza
    t1.style.color = "black"
    t2.style.color = "black"
}

function tema_escuro(){
    var t1 = document.getElementById("t1")
    var t2 = document.getElementById("t2")
    var tema = localStorage.getItem('tema')
     
    localStorage.setItem('tema', "tema_escuro")        
    console.log(tema)               
    document.body.style.background = "#35363f"        
    t1.style.color = "white"
    t2.style.color = "white"
}

/*
//Função do modal do modelo financeiro
function copiar_modelo_financeiro(){
    // valores
    var v1 =document.getElementById("campo_valor1").value
    var v2 =document.getElementById("campo_valor2").value
    var v3 =document.getElementById("campo_valor3").value
    var v4 =document.getElementById("campo_valor4").value
    var v5 =document.getElementById("campo_valor5").value

    // datas
    var d1 =document.getElementById("data_valor1").value
    var d2 =document.getElementById("data_valor2").value
    var d3 =document.getElementById("data_valor3").value
    var d4 =document.getElementById("data_valor4").value
    var d5 =document.getElementById("data_valor5").value

    var texto = `Nesse cadastro, consta em atraso a(s) seguinte(s) fatura(s): \n`
    if ((v1!="")&&(d1!=null)){
        d1 = d1.split('-').reverse().join('/')        
        texto = texto + `- Valor: R$${v1} | Vencimento: ${d1}\n`
    }
    if ((v2!="")&&(d1!=null)){
        d2 = d2.split('-').reverse().join('/')
        texto = texto + `- Valor: R$${v2} | Vencimento: ${d2}\n`
    }
    if ((v3!="")&&(d1!=null)){
        d3 = d3.split('-').reverse().join('/')
        texto = texto + `- Valor: R$${v3} | Vencimento: ${d3}\n`
    }
    if ((v4!="")&&(d1!=null)){
        d4 = d4.split('-').reverse().join('/')
        texto = texto + `- Valor: R$${v4} | Vencimento: ${d4}\n`
    }
    if ((v5!="")&&(d1!=null)){
        d5 = d5.split('-').reverse().join('/')
        texto = texto + `- Valor: R$${v5} | Vencimento: ${d5}\n`
    }

    texto = texto + `Acesse por meio do Painel Financeiro no site da FasterNet: https://www2.fasternet.com.br/financa/default.asp`

    console.log(texto)
    
    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto);
}*/

//Função do modal do modelo financeiro
function copiar_modelo_financeiro(){
    // valores
    var v1 =document.getElementById("campo_valor1").value
    var v2 =document.getElementById("campo_valor2").value
    var v3 =document.getElementById("campo_valor3").value
    var v4 =document.getElementById("campo_valor4").value
    var v5 =document.getElementById("campo_valor5").value

    // datas
    var d1 =document.getElementById("data_valor1").value
    var d2 =document.getElementById("data_valor2").value
    var d3 =document.getElementById("data_valor3").value
    var d4 =document.getElementById("data_valor4").value
    var d5 =document.getElementById("data_valor5").value

    var texto = `Nesse cadastro, consta em atraso a(s) seguinte(s) fatura(s): \n`
    if ((v1!="")&&(d1!=null)){        
        texto = texto + `- Valor: R$${v1} | Vencimento: ${d1}\n`
    }
    if ((v2!="")&&(d1!=null)){        
        texto = texto + `- Valor: R$${v2} | Vencimento: ${d2}\n`
    }
    if ((v3!="")&&(d1!=null)){        
        texto = texto + `- Valor: R$${v3} | Vencimento: ${d3}\n`
    }
    if ((v4!="")&&(d1!=null)){        
        texto = texto + `- Valor: R$${v4} | Vencimento: ${d4}\n`
    }
    if ((v5!="")&&(d1!=null)){        
        texto = texto + `- Valor: R$${v5} | Vencimento: ${d5}\n`
    }

    texto = texto + `Acesse por meio do Painel Financeiro no site da FasterNet: https://www2.fasternet.com.br/financa/default.asp`

    console.log(texto)
    
    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto);
}


function apagar_modelo_financeiro(){
    var elements1 = document.querySelectorAll(`[class^="campo_valor"]`)

    elements1.forEach(e => {
        e.value=""
    });
}

/*
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    
  })
  */

  $(function () {
    $('[data-toggle="tooltip"]').tooltip({     
        'delay': { show: 1000, hide: 100 }
    })    
  })


  $(function () {
    $('[data-toggle="tooltip"]').tooltip({     
        'delay': { show: 2000, hide: 100 }
    })    
  })


function muda_title(){    
    var elementsx = document.getElementsByClassName('atalho')
    elementsx[0].setAttribute("data-original-title",localStorage.getItem('txt_atalho1'))
    elementsx[1].setAttribute("data-original-title",localStorage.getItem('txt_atalho2'))
    elementsx[2].setAttribute("data-original-title",localStorage.getItem('txt_atalho3'))
    elementsx[3].setAttribute("data-original-title",localStorage.getItem('txt_atalho4'))
    elementsx[4].setAttribute("data-original-title",localStorage.getItem('txt_atalho5'))
    elementsx[5].setAttribute("data-original-title",localStorage.getItem('txt_atalho6'))
}

// Função do menu lateral
function menu(){
    document.querySelector(".Menu").classList.toggle("menu-show");
}


function mudar_tema_link(){
    var link_salvo = localStorage.getItem('mudar_tema_link')
    var link = document.getElementById("mudar_tema_link").value

    if ((link_salvo!=link)&&(link!="")){
        localStorage.setItem('mudar_tema_link', link)    
    }else{
        link = link_salvo
    }     
    document.body.style.backgroundImage = `url(${link})`;   
    
    if ((link_salvo=="")&&(link="")){
        mudar_tema_cor()
    }
}

function mudar_tema_cor(){
    var cor_salvo = localStorage.getItem('mudar_tema_cor')
    var cor = document.getElementById("mudar_tema_cor").value

    if ((cor_salvo!=cor)&&(cor!="")){
        localStorage.setItem('mudar_tema_cor', cor)    
    }else{
        cor = link_salvo
    }     
    document.body.style.backgroundColor = cor;
    document.body.style.backgroundImage = null
    localStorage.setItem('mudar_tema_link', "")  

    /*
    var cor = document.getElementById("mudar_tema_cor").value
    document.body.style.backgroundColor = cor;
    localStorage.setItem('mudar_tema_cor', cor)    */
}