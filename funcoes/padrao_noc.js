

function copiar_padrao(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)
    var mensagem = "Olá, pode verificar?\n"
    
    mensagem += `SN: ${elements[0].value}\nUsuário: ${elements[1].value}\nCidade: ${elements[2].value}\nAutenticação: ${elements[3].value}\nPlano: ${elements[4].value}\nEndereço: ${elements[5].value}\nMotivo da verificação: ${elements[6].value}\nNome e nº de telefone do cliente: ${elements[7].value}`
    mensagem += `\nApresenta risco de acidente: ${elements[8].value}`
    console.log(mensagem)

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(mensagem)
}


// A FUNÇAO ABAIXO EXIBE O MODAL ASSIM QUE A PÁGINA É CARREGADA
window.addEventListener("load", (event) => {
    //$('#notificacaoNovidades').modal('show')
});
              