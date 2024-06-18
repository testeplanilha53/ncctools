
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
            var diasMes = obterDiasNoMes(new Date(dataFinal))
            // console.log(diasMes)
            
            explicaCalculo.innerText += `Instalação/Mud. Plan. em: ${converterData(dataInicial)}.\n`
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
            if (isNaN(meses)){
                seteDias_c.innerHTML = `<img src="https://cdn.pixabay.com/animation/2022/12/26/19/45/19-45-46-138_512.gif" alt="" width="80px" style="position: absolute; right: 40px;">                 
                                        🤖 Verifique se as datas foram inseridas corretamente.<br>Ocorreu uma inconsistência!`
            }else{
                seteDias_c.innerText = `Cliente a ${meses} meses (Sem Multa).`
            }            
        }                  
    }
    // resultadoMulta.innerText = multa
    
}



function calcularMesesEntreDatas(dataInicial, dataFinal) {
    // Converter as datas para objetos Date
    var dataInicio = new Date(dataInicial);
    var dataFim = new Date(dataFinal);

    // Obter os anos e os meses das datas
    var anoInicio = dataInicio.getFullYear();
    var mesInicio = dataInicio.getMonth();
    var anoFim = dataFim.getFullYear();
    var mesFim = dataFim.getMonth();

    // Calcular a diferença total em meses
    var diferencaMeses = (anoFim - anoInicio) * 12 + (mesFim - mesInicio);

    return diferencaMeses;
}


function verificarDiferencaDe7Dias(dataInicial, dataFinal) {
    // Converter as datas para objetos Date
    var dataInicio = new Date(dataInicial);
    var dataFim = new Date(dataFinal);

    // Calcular a diferença em milissegundos
    var diferencaEmMilissegundos = dataFim - dataInicio;

    // Converter a diferença para dias (1 dia = 24 horas * 60 minutos * 60 segundos * 1000 milissegundos)
    var diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

    // Verificar se a diferença é exatamente 7 dias
    return diferencaEmDias <= 7;
}


function obterDiasNoMes(data) {

    data.setDate(data.getDate() + 1);
    
    var ano = data.getFullYear();
    console.log(`Ano ${ano}`)
    var mes = data.getMonth() + 1; // Mês é zero-indexado, então adicionar 1
    console.log(`mes ${mes}`)

    // Cria uma nova data com o mês seguinte e o dia 0
    var proximoMes = new Date(ano, mes, 0);
    console.log(`proximoMes ${proximoMes}`)

    // Retorna o último dia do mês, que é o número de dias no mês
    console.log(`final ${proximoMes.getDate()}`)
    return proximoMes.getDate();

}

// Exemplo de uso
var data = new Date('2024-06-17'); // 17 de junho de 2024
var diasNoMes = obterDiasNoMes(data);
console.log(diasNoMes); // Saída: 30, pois junho tem 30 dias



function converterData(data) {
    // Dividir a string da data em partes (ano, mês, dia)
    var partes = data.split('-');

    // Reorganizar as partes para o formato DD-MM-YYYY
    var dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    return dataFormatada;
}


function substituirPontoPorVirgula(texto) {
    // Usar replace com expressão regular para substituir todos os pontos por vírgulas
    return texto.replace(/\./g, ',');
}


function obterDiaDaData(data) {
    // Usar moment para criar um objeto de data e obter o dia
    var dia = moment(data).date();
    return dia;
}

// Exemplo de uso
// var data = '2023-06-15'; // formato YYYY-MM-DD
// var dia = obterDiaDaData(data);
// console.log(`O dia da data é: ${dia}`);
