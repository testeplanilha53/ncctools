

function calcularMulta(){
    var dataInicial =window.document.getElementById("multa_dInicial").value
    var dataFinal =window.document.getElementById("multa_dInfinal").value
    var valorPlano =window.document.getElementById("valorPlano").value
    var resultadoMulta = window.document.getElementById("resultado_multa")    

    var meses = calcularMesesEntreDatas(dataInicial, dataFinal)+1
    console.log(meses)

    if (meses<12){
        var multa = (12-meses)*valorPlano*0.3
        console.log(multa)
        resultadoMulta.innerText = multa
    }    
    
}



function calcularMesesEntreDatas(dataInicial, dataFinal) {
    // Converter as datas para objetos Date
    const dataInicio = new Date(dataInicial);
    const dataFim = new Date(dataFinal);

    // Obter os anos e os meses das datas
    const anoInicio = dataInicio.getFullYear();
    const mesInicio = dataInicio.getMonth();
    const anoFim = dataFim.getFullYear();
    const mesFim = dataFim.getMonth();

    // Calcular a diferença total em meses
    const diferencaMeses = (anoFim - anoInicio) * 12 + (mesFim - mesInicio);

    return diferencaMeses;
}