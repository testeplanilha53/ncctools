function WidgetContainer(content = "Content"){
    return(`
    <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
        <label for="exampleFormControlTextarea1" class="form-label">Agendamento</label>
        </div><!--end input container-->

        ${content}

    </div> <!--End container shadow-sm-->
    
    `)
}

export {WidgetContainer}