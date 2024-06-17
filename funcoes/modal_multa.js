
function inserir_modelo_multa(){
    
    var explicaCalculo = window.document.getElementById("explicaCalculo")  
    var descricao = window.document.getElementById("descricao")  
    descricao.value += `\n<hr><b>Repassado as informações sobre a multa por quebra de contrato.</b>\n${explicaCalculo.innerText}`

}


function calcularMulta(){
    var dataInicial =window.document.getElementById("multa_dInicial").value
    var dataFinal =window.document.getElementById("multa_dInfinal").value
    var valorPlano =window.document.getElementById("valorPlano").value
    var resultadoMulta = window.document.getElementById("resultado_multa")    
    var seteDias_c = window.document.getElementById("seteDias")    
    var explicaCalculo = window.document.getElementById("explicaCalculo")    
    explicaCalculo.innerText = ""

    var multa = 0
    let seteDias = verificarDiferencaDe7Dias(dataInicial, dataFinal)
    // console.log(seteDias)

    //Verifica se tem apenas 7 dias
    if (seteDias===true){
        seteDias_c.innerText = "Dentro de 7 dias (Sem Multa)."
        // resultadoMulta.innerText = multa
    }else{
        seteDias_c.innerText = ""
        var meses = calcularMesesEntreDatas(dataInicial, dataFinal)
        // console.log(meses)
        
        if (meses<12){
            multa = (12-meses)*valorPlano*0.3
            multa = multa.toFixed(2) // deixando apenas com duas casas decimais
            // console.log(multa)        
            var diasMes = obterDiasNoMes(dataFinal)
            
            explicaCalculo.innerText += `Instalação em: ${converterData(dataInicial)}.\n`
            explicaCalculo.innerText += `Interesse no cancelamento em: ${converterData(dataFinal)}.\n`
            explicaCalculo.innerText += `Meses utilizados: ${meses}.\n`     
            explicaCalculo.innerText += `Meses restantes: ${12-meses}.\n`     
            explicaCalculo.innerText += `Valor atual do plano: R$${substituirPontoPorVirgula(valorPlano)}.\n` 
            explicaCalculo.innerText += `Valor estimado da multa: (12-${meses})×(${substituirPontoPorVirgula(valorPlano)})×30% = R$${substituirPontoPorVirgula(multa)}.\n`

            // explicaCalculo.innerText += `Mês do cancelamento com ${diasMes} dias.\n`           
            
            var proporcional = valorPlano*obterDiaDaData(dataFinal)/diasMes
            proporcional = substituirPontoPorVirgula(proporcional.toFixed(2))
            explicaCalculo.innerText += `Valor proporcional mensalidade: (${substituirPontoPorVirgula(valorPlano)}×${obterDiaDaData(dataFinal)})/${diasMes} = R$${proporcional}.\n`
            
            

        } else{
            seteDias_c.innerText = `Cliente a ${meses} meses (Sem Multa).`
        }                  
    }
    // resultadoMulta.innerText = multa
    
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


function obterDiasNoMes(data) {
    // Converter a string de data para um objeto Date
    const dataAtual = new Date(data);

    // Obter o ano e o mês da data
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    // Criar uma data para o primeiro dia do mês seguinte
    const primeiroDiaDoMesSeguinte = new Date(ano, mes + 1, 1);

    // Subtrair um dia para obter o último dia do mês original
    const ultimoDiaDoMes = new Date(primeiroDiaDoMesSeguinte - 1);

    // Retornar o dia do mês, que é o número total de dias no mês
    return ultimoDiaDoMes.getDate();
}

// Exemplo de uso
// const data = '2023-07-15'; // formato YYYY-MM-DD
// const diasNoMes = obterDiasNoMes(data);
// console.log(`O mês tem ${diasNoMes} dias`);


function converterData(data) {
    // Dividir a string da data em partes (ano, mês, dia)
    const partes = data.split('-');

    // Reorganizar as partes para o formato DD-MM-YYYY
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    return dataFormatada;
}


function substituirPontoPorVirgula(texto) {
    // Usar replace com expressão regular para substituir todos os pontos por vírgulas
    return texto.replace(/\./g, ',');
}


function obterDiaDaData(data) {
    // Usar moment para criar um objeto de data e obter o dia
    const dia = moment(data).date();
    return dia;
}

// Exemplo de uso
// const data = '2023-06-15'; // formato YYYY-MM-DD
// const dia = obterDiaDaData(data);
// console.log(`O dia da data é: ${dia}`);
