var atalho1 = window.document.getElementById("atalho1");
var atalho2 = window.document.getElementById("atalho2");
var atalho3 = window.document.getElementById("atalho3");

var atalho4 = window.document.getElementById("atalho4");
var atalho5 = window.document.getElementById("atalho5");
var atalho6 = window.document.getElementById("atalho6");

var pausa_1 = window.document.getElementById("pausa_1");
var intervalo = window.document.getElementById("intervalo");
var pausa_2 = window.document.getElementById("pausa_2");

var key_protocolo = window.document.getElementById("key_protocolo");

function salvar(){
    
    localStorage.clear();   //apaga as informações que já estavam salvas 

    //Salva os atalhos
    localStorage.setItem('txt_atalho1', atalho1.value);
    localStorage.setItem('txt_atalho2', atalho2.value);
    localStorage.setItem('txt_atalho3', atalho3.value);

    localStorage.setItem('txt_atalho4', atalho4.value);
    localStorage.setItem('txt_atalho5', atalho5.value);
    localStorage.setItem('txt_atalho6', atalho6.value);
    localStorage.setItem('txt_key_protocolo', key_protocolo.value);

    localStorage.setItem('txt_key_pausa_1', pausa_1.value);
    localStorage.setItem('txt_intervalo', intervalo.value);
    localStorage.setItem('txt_pausa_2', pausa_2.value);

    

    //window.close();
}

function carregar(){
    atalho1.value = localStorage.getItem('txt_atalho1')
    atalho2.value = localStorage.getItem('txt_atalho2')
    atalho3.value = localStorage.getItem('txt_atalho3')
    
    atalho4.value = localStorage.getItem('txt_atalho4')
    atalho5.value = localStorage.getItem('txt_atalho5')
    atalho6.value = localStorage.getItem('txt_atalho6')
    key_protocolo.value = localStorage.getItem('')

    pausa_1.value = localStorage.getItem('txt_key_pausa_1')
    intervalo.value = localStorage.getItem('txt_intervalo')
    pausa_2.value = localStorage.getItem('txt_pausa_2')
}

/*
function mud_cor_fundo(){
    document.getElementById("corpo_tela_principal").background-color: = document.getElementById("cor_fundo").value;
}

function mud_cor_fonte(){

}*/

var atalho1 = window.document.getElementById("atalho1");
var atalho2 = window.document.getElementById("atalho2");
var atalho3 = window.document.getElementById("atalho3");

var atalho4 = window.document.getElementById("atalho4");
var atalho5 = window.document.getElementById("atalho5");
var atalho6 = window.document.getElementById("atalho6");

var pausa_1 = window.document.getElementById("pausa_1");
var intervalo = window.document.getElementById("intervalo");
var pausa_2 = window.document.getElementById("pausa_2");

var key_protocolo = window.document.getElementById("key_protocolo");

function salvar(){
    
    localStorage.clear();   //apaga as informações que já estavam salvas 

    //Salva os atalhos
    localStorage.setItem('txt_atalho1', atalho1.value);
    localStorage.setItem('txt_atalho2', atalho2.value);
    localStorage.setItem('txt_atalho3', atalho3.value);

    localStorage.setItem('txt_atalho4', atalho4.value);
    localStorage.setItem('txt_atalho5', atalho5.value);
    localStorage.setItem('txt_atalho6', atalho6.value);
    localStorage.setItem('txt_key_protocolo', key_protocolo.value);

    localStorage.setItem('txt_key_pausa_1', pausa_1.value);
    localStorage.setItem('txt_intervalo', intervalo.value);
    localStorage.setItem('txt_pausa_2', pausa_2.value);

    //window.close();
}

function carregar(){
    atalho1.value = localStorage.getItem('txt_atalho1')
    atalho2.value = localStorage.getItem('txt_atalho2')
    atalho3.value = localStorage.getItem('txt_atalho3')
    
    atalho4.value = localStorage.getItem('txt_atalho4')
    atalho5.value = localStorage.getItem('txt_atalho5')
    atalho6.value = localStorage.getItem('txt_atalho6')
    key_protocolo.value = localStorage.getItem('')

    pausa_1.value = localStorage.getItem('txt_key_pausa_1')
    intervalo.value = localStorage.getItem('txt_intervalo')
    pausa_2.value = localStorage.getItem('txt_pausa_2')
}

/*
function mud_cor_fundo(){
    document.getElementById("corpo_tela_principal").background-color: = document.getElementById("cor_fundo").value;
}

function mud_cor_fonte(){

}*/

