

function calcularMulta(){
    var dataInicial =window.document.getElementById("multa_dInicial").value
    var dataFinal =window.document.getElementById("multa_dInfinal").value
    var valorPlano =window.document.getElementById("valorPlano").value
    var resultadoMulta = window.document.getElementById("resultado_multa")    
    var seteDias_c = window.document.getElementById("seteDias")    

    var multa = 0
    let seteDias = verificarDiferencaDe7Dias(dataInicial, dataFinal)
    console.log(seteDias)

    //Verifica se tem apenas 7 dias
    if (seteDias===true){
        seteDias_c.innerText = "Dentro de 7 dias (Sem Multa)"
        resultadoMulta.innerText = multa
    }else{
        seteDias_c.innerText = ""
        var meses = calcularMesesEntreDatas(dataInicial, dataFinal)
        // console.log(meses)
        
        if (meses<12){
            multa = (12-meses)*valorPlano*0.3
            multa = multa.toFixed(2) // deixando apenas com duas casas decimais
            // console.log(multa)        
        }                      
    }
    resultadoMulta.innerText = multa
    
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


function verificarDiferencaDe7Dias(dataInicial, dataFinal) {
    // Converter as datas para objetos Date
    const dataInicio = new Date(dataInicial);
    const dataFim = new Date(dataFinal);

    // Calcular a diferença em milissegundos
    const diferencaEmMilissegundos = dataFim - dataInicio;

    // Converter a diferença para dias (1 dia = 24 horas * 60 minutos * 60 segundos * 1000 milissegundos)
    const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

    // Verificar se a diferença é exatamente 7 dias
    return diferencaEmDias <= 7;
}