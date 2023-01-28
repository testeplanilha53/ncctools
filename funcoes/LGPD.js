/*
//  Função Máscara para o número de contato
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
	id('tel1').onkeyup = function(){
		mascara( this, mtel );
	}
    id('tel2').onkeyup = function(){
		mascara( this, mtel );
	}
    id('tel3').onkeyup = function(){
		mascara( this, mtel );
	}
    id('tel4').onkeyup = function(){
		mascara( this, mtel );
	}
}*/



function copiar(){
    var tel1 = document.getElementById("tel1").value
    var tel2 = document.getElementById("tel2").value
    var tel3 = document.getElementById("tel3").value
    var tel4 = document.getElementById("tel4").value
    var email = document.getElementById("email").value

    var texto_completo = `No seu cadastro constam as seguintes informações para contato: ` 
    //var texto_completo = `No seu cadastro constam as seguintes informações para contato:\nDeseja alterar algum contato?` 
    //deseja remover ou adicionar algum contato?
    
    var DDD
    var contato
    var tamanho

    if (tel1!=""){
        tel = tel1
        tamanho = tel.length
        if (tamanho==11){   
            DDD = tel.substring(0,2)
            contato = tel.substring(7,tamanho)
            texto_completo = texto_completo + ` (${DDD}) X XXXX-${contato}`
        }else{
            DDD = tel.substring(0,2)
            contato = tel.substring(6,tamanho)
            texto_completo = texto_completo + ` (${DDD}) XXXX-${contato}`
        }                
    }

    if (tel2!=""){
        tel = tel2
        tamanho = tel.length
        if (tamanho==11){   
            DDD = tel.substring(0,2)
            contato = tel.substring(7,tamanho)
            texto_completo = texto_completo + `, (${DDD}) X XXXX-${contato}`
        }else{
            DDD = tel.substring(0,2)
            contato = tel.substring(6,tamanho)
            texto_completo = texto_completo + `, (${DDD}) XXXX-${contato}`
        }                 
    }

    if (tel3!=""){
        tel = tel3
        tamanho = tel.length
        if (tamanho==11){   
            DDD = tel.substring(0,2)
            contato = tel.substring(7,tamanho)
            texto_completo = texto_completo + `, (${DDD}) X XXXX-${contato}`
        }else{
            DDD = tel.substring(0,2)
            contato = tel.substring(6,tamanho)
            texto_completo = texto_completo + `, (${DDD}) XXXX-${contato}`
        }                 
    }

    if (tel4!=""){
        tel = tel4
        tamanho = tel.length
        if (tamanho==11){   
            DDD = tel.substring(0,2)
            contato = tel.substring(7,tamanho)
            texto_completo = texto_completo + `, (${DDD}) X XXXX-${contato}`
        }else{
            DDD = tel.substring(0,2)
            contato = tel.substring(6,tamanho)
            texto_completo = texto_completo + `, (${DDD}) XXXX-${contato}`
        }                 
    }


    if (email!=""){
        tamanho = email.length
        var arroba = email.search('@')
        var email_novo = email.substring(0,2)+"********"+ email.substring(arroba,email.length)
        
        texto_completo = texto_completo + ` e ${email_novo}`

    }

    texto_completo = texto_completo + `. Deseja remover ou adicionar algum contato?`

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(texto_completo)    

    // Exibindo a notificação de texto copiado por 2 segundos
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-info" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de enviar para o cliente </div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 3000);
        
}




// Função Transferir
function transferir_dados(){
    var area_transferencia
    var data = navigator.clipboard.readText().then(function(dados) {        
        // tenho que programar tudo dentro dessa função
        console.log("Your string: ", dados);        
        area_transferencia = String(dados)

        //Remove as quebras de linha do texto
        area_transferencia = area_transferencia.replace(/(\r\n|\n|\r)/gm, "");
        //window.alert(area_transferencia)

        //
        retorna_email(area_transferencia)
        retorna_contato(area_transferencia)
    });    
}




function retorna_email(dados){

    // COLETANDO O E-MAIL
    var inicio_email = dados.search("conta:")     
    var fim_email = dados.search("É ")
    
    //se não tiver os campos acima ele deixa -1, se não ele executa e pega o e-mail
    var email
    if (inicio_email==fim_email){
        email = ""
    }else{
        email = dados.substring(inicio_email+7,fim_email-1)
    }
     
    // Passando o valor do e-mail para a página
    var txt_email = document.getElementById("email")
    txt_email.value = email

}


function retorna_contato(dados){
    
    var txt_tel1 = document.getElementById("tel1")
    var txt_tel2 = document.getElementById("tel2")
    var txt_tel3 = document.getElementById("tel3")
    var txt_tel4 = document.getElementById("tel4")

    // PARA OS CONTATOS    
    dados = dados.replace(/ Telefone:/g,"")
    //window.alert(dados)
    
        // coleta a posição do DDD: e pega o número após
        var inicio = dados.search("DDD:")
        txt_tel1.value = (dados.substring(inicio+4,inicio+15)).replace(/[^0-9]/g,'')

    // Atualizando o vetor de dados
    var tamanho = dados.length // verifica o tamanho do vetor
    dados = dados.substring(inicio+4,tamanho)

        // coleta a posição do DDD: e pega o número após
        var inicio = dados.search("DDD:")
        txt_tel2.value = (dados.substring(inicio+4,inicio+15)).replace(/[^0-9]/g,'')

    // Atualizando o vetor de dados
    var tamanho = dados.length // verifica o tamanho do vetor
    dados = dados.substring(inicio+4,tamanho)

        // coleta a posição do DDD: e pega o número após
        var inicio = dados.search("DDD:")
        txt_tel3.value = (dados.substring(inicio+4,inicio+15)).replace(/[^0-9]/g,'')

    // Atualizando o vetor de dados
    var tamanho = dados.length // verifica o tamanho do vetor
    dados = dados.substring(inicio+4,tamanho)

        // coleta a posição do DDD: e pega o número após
        var inicio = dados.search("DDD:")
        txt_tel4.value = (dados.substring(inicio+4,inicio+15)).replace(/[^0-9]/g,'')

}
