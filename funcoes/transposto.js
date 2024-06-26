
function transposto(){
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")

    if (botoes_laterais.classList.contains('oculto')){
        deixar_na_lateral()
    }else{
        deixar_em_baixo()
    }
    
}

function deixar_na_lateral(){
 
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")
    
    botoes_inferiores.classList.add('oculto');
    
    botoes_laterais.classList.remove('oculto');
    botoes_laterais.classList.add('col-lg-3');
    botoes_laterais.classList.add('celula_lateral');

    //Salva o tipo de layout
    localStorage.setItem('layout', '2');

}


function deixar_em_baixo(){
 
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")
    
    botoes_inferiores.classList.remove('oculto');
    
    botoes_laterais.classList.add('oculto');
    botoes_laterais.classList.remove('col-lg-3');
    botoes_laterais.classList.remove('celula_lateral');

    //Salva o tipo de layout
    localStorage.setItem('layout', '1');

}


function verificaLayout(){
    // Pegando a informação do local Storage
    var layout = localStorage.getItem('layout');
    
    if (layout=='2'){
        deixar_em_baixo()
    }else{        
        deixar_na_lateral()
    }
}

//mudar o layout assim que carregar
verificaLayout()