function  widget(){
    return(
    `<div class="tools container-sm ">
        <div class="wdg">
            <div class="clientArea">
                <!-- Area edição -->
                <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
                    <!--Entradas de dados-->
                    <div class="wdg-content-input row">
                        <label for="exampleFormControlTextarea1" class="form-label">Entrada de dados</label>
                        <div class="col-md-6">
                            <!--Nome-->
                            <div class="input-group input-group-sm mb-3">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                                <input type="text" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Nome do contato">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                            </div><!--end input-->

                            <!--Telefone-->
                            <div class="input-group input-group-sm mb-3">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                                <input type="text" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Telefone do contato">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                            </div><!--end input-->
                        </div><!--end row-->

                        <div class="col-md-6">
                            <!--Protocolo chat-->
                            <div class="input-group input-group-sm mb-3">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                                <input type="text" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Protocolo do chat">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                            </div><!--end input-->

                            <!--Protocolo ADM-->
                            <div class="input-group input-group-sm mb-3">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                                <input type="text" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Protocolo do adm">
                                <button class="btn btn-outline-secondary" type="button"
                                    id="button-addon1">Button</button>
                            </div><!--end input-->
                        </div><!--end row-->



                    </div><!--end input container -->
                </div><!--End container shadow-sm -->

                <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
                    <!--Edição de dados-->
                    <div class="wdg-content-area-edit">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Editor de texto</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div> <!--End container shadow-sm -->

                <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
                    <!--Entradas de dados-->
                    <div class="wdg-content-input row">
                        <label for="exampleFormControlTextarea1" class="form-label">Agendamento</label>
                        <div class="col-md-6">
                            <!--Agendamento-->
                            <div class="input-group input-group-sm mb-3">
                                <button type="button" class="btn btn-outline-secondary">Action</button>
                                <button type="button"
                                    class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Manhã</a></li>
                                    <li><a class="dropdown-item" href="#">Tarde</a></li>
                                    <li><a class="dropdown-item" href="#">Noite</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="#">Indisponível</a></li>
                                </ul>
                                <input type="text" aria-label="First name" class="form-control"
                                    placeholder="Agendamento">
                                <input type="date" aria-label="Date suport" class="form-control">
                            </div><!--end input-->
                        </div><!--end col-->

                        <div class="col-md-6">
                            <!--Disponibilidade-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-group input-group-sm mb-3">
                                        <button type="button" class="btn btn-outline-secondary">Action</button>
                                        <button type="button"
                                            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Manhã</a></li>
                                            <li><a class="dropdown-item" href="#">Tarde</a></li>
                                            <li><a class="dropdown-item" href="#">Noite</a></li>
                                        </ul>
                                        <input type="text" aria-label="First name" class="form-control"
                                            placeholder="Disponibilidade geral">
                                    </div><!--end input-->
                                </div>


                                <div class="col-md-6">
                                    <div class="input-group input-group-sm mb-3">
                                        <button type="button" class="btn btn-outline-secondary">Action</button>
                                        <input type="text" aria-label="Last name" class="form-control"
                                            placeholder="Ponto de referência">
                                    </div><!--end input-->
                                </div>


                            </div><!--end input-->
                        </div><!--end col-->
                    </div><!--end input container-->
                </div> <!--End container shadow-sm-->

                <!--Gerador de script-->
                <div class="my-3 p-3 bg-body rounded shadow-sm border bg-dark-subtle">
                    <div class="wdg-content-input row">
                        <label for="exampleFormControlTextarea1" class="form-label">Ações</label>
                        <div class="col-md-6">
                            <input type="button" value="Protocolo">
                            <input type="button" value="Copiar">
                            <input type="button" value="Transferir">
                            <input type="button" value="Apagar">
                        </div>
                    </div>

                </div>
            </div>

           

`

)}


export {widget};