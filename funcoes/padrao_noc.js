

function copiar_padrao(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)
    var mensagem = "Olá, pode verificar?\n"
    
    mensagem += `SN: ${elements[0].value}\n
                 Usuário: ${elements[1].value}\n
                 Cidade: ${elements[2].value}\n
                 Autenticação: ${elements[3].value}\n
                 Plano: ${elements[4].value}\n
                 Endereço: ${elements[5].value}\n
                 Motivo da verificação: ${elements[6].value}\n
                 Nome: ${elements[7].value}\n
                 nº de telefone do cliente: ${elements[8].value}\n`
    if (elements[9].value!=""){
        mensagem += `\nApresenta risco de acidente: ${elements[9].value}`
    }
    
    console.log(mensagem)

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(mensagem)
}


// A FUNÇAO ABAIXO EXIBE O MODAL ASSIM QUE A PÁGINA É CARREGADA
window.addEventListener("load", (event) => {
    //$('#notificacaoNovidades').modal('show')
});
              