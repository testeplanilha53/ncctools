



function calcularPontoAdicional(){

    var plano_mega = window.document.getElementById("plano_mega").value
    var plan_tipo = window.document.getElementById("plan_tipo").value    
    var qtd_parcelas = window.document.getElementById("qtd_parcelas").value        
    var pontos_adicionais = window.document.getElementById("pontos_adicionais").value
    var valorPlano = window.document.getElementById("valorPlano_adc").value    
    
    var vInsta = valorInstalação(pontos_adicionais)    
    console.log(vInsta)

    var vMensalidade = valorMensalidade(pontos_adicionais)    
    console.log(vMensalidade)

    // console.log(typeof(valorPlano))
    // console.log(typeof(vMensalidade))
    
    var Total = (valorPlano*1) + (vMensalidade*1)    
    console.log(Total)
    Total = Total.toFixed(2)
    console.log(substituirPontoPorVirgula(Total))
    
    
    var vParcela = vInsta/qtd_parcelas
    vParcela = vParcela.toFixed(2)
    console.log(substituirPontoPorVirgula(vParcela))
    
    
    var script = `Cliente solicitou a instalação de ${pontos_adicionais} ${pluralPontos(pontos_adicionais)} [wi-fi]. Ficou ciente do prazo de até 7 dias para a ocorrência do serviço.<hr>\n<b>Valor da instalação:</b> R$${vInsta} (em ${qtd_parcelas}x).\n<b>Valor da mensalidade de ${pontos_adicionais} ${pluralPontos(pontos_adicionais)}:</b> R$${vMensalidade}.<hr>\nCliente possui um plano de ${plano_mega} ${plan_tipo}, nesse caso o valor da mensalidade ficará: R$${valorPlano} + R$${vMensalidade} = R$${Total}, além de R$${vParcela} da instalação durante ${qtd_parcelas} ${verMes(qtd_parcelas)}.`
    console.log(script)
    


    var descricao = window.document.getElementById("descricao")  
    descricao.value += script

}



function valorInstalação(pontos_adicionais){
    if (pontos_adicionais!=""){
        pontos_adicionais = pontos_adicionais-1
        var valores = [100.00,150.00,200.00,250.00,300.00]            
        return valores[pontos_adicionais] 
    }   
}

function valorMensalidade(pontos_adicionais){
    if (pontos_adicionais!=""){
        pontos_adicionais = pontos_adicionais-1
        var valores = [29.90,49.90,69.90,89.90,109.90]            
        return valores[pontos_adicionais] 
    }   
}


function verMes(qtd_parcelas){
    if (qtd_parcelas>1){
        return "meses"        
    }
    return "mês"
}

function pluralPontos(pontos_adicionais){
    if (pontos_adicionais>1){
        return "pontos adicionais"        
    }
    return "ponto adicional"        
}