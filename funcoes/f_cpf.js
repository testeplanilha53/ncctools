var areaCPF = window.document.getElementById("areaCPF");

function libera_campo_cpf(){
    areaCPF.innerHTML = `<button type="button" id="btn_cpf" class="btn btn-secondary btn_atalho2" data-toggle="tooltip" data-placement="top" title="Após copiar o CPF, clique aqui." onclick="cpf()" ondblclick="x()" onchange="cpf_corrigir()">CPF</button>`
}