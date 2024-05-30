function widgetContainer( label = "Label", content = "Content"){
    return(`
    <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
        <label for="exampleFormControlTextarea1" class="form-label">${ label }</label>
        <hr>
        ${content} <!-- Aqui será adicionado o conteúdo do widget -->

    </div> <!--End container shadow-sm-->
    
    `)
}

export {widgetContainer}