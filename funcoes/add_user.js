function cadastrar(){
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-info" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>USUÁRIO ADICIONADO COM SUCESSO!</strong> </div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 3000);
}

function remover(){
    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>USUÁRIO REMOVIDO</strong></div>'
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 3000);
}