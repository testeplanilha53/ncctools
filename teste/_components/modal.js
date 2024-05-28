function  modal(){
    return(
    `
	<!-- As a link -->
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Tools 2.0</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" data-bs-toggle="modal" data-bs-target="#notificacoesModal" href="#">
							Notificações
							<span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Documentação</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#textModelsModal"
							href="#">Modelos</a>
					</li>

					<li>
						<a class="nav-link" data-bs-toggle="modal" data-bs-target="#nocModal" href="#">App NOC</a>
					</li>
					<li>
						<a class="nav-link" data-bs-toggle="modal" data-bs-target="#servicesModal" href="#">App
							Serviços</a>
					</li>
					<li>
						<a class="nav-link" data-bs-toggle="modal" data-bs-target="#lgpdModal" href="#">App LGPD</a>
					</li>


					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false">
							Usuário
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Notificações</a></li>
							<li><a class="dropdown-item" href="#">Configurações</a></li>
							<hr>
							<li><a class="dropdown-item" href="#">Sair</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="modal fade" id="notificacoesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalScrollableTitle">Modelos de preenchimento</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<h2 class="fs-5">Popover in a modal</h2>
					<p>This <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title"
							data-bs-content="Popover body content is set in this attribute.">button</button> triggers a
						popover on click.</p>
					<hr>
					<h2 class="fs-5">Tooltips in a modal</h2>
					<p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#"
							data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>


	</div>

	<div class="modal fade" id="textModelsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalScrollableTitle">Modelos de preenchimento</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line
						breaks to demonstrate how content can exceed minimum inner height, thereby showing inner
						scrolling. When content becomes longer than the predefined max-height of modal, content will be
						cropped and scrollable within the modal.</p>
					<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
					<p>This content should appear at the bottom after you scroll.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="nocModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalScrollableTitle">Modal NOC</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line
						breaks to demonstrate how content can exceed minimum inner height, thereby showing inner
						scrolling. When content becomes longer than the predefined max-height of modal, content will be
						cropped and scrollable within the modal.</p>
					<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
					<p>This content should appear at the bottom after you scroll.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="servicesModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalScrollableTitle">Serviços</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line
						breaks to demonstrate how content can exceed minimum inner height, thereby showing inner
						scrolling. When content becomes longer than the predefined max-height of modal, content will be
						cropped and scrollable within the modal.</p>
					<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
					<p>This content should appear at the bottom after you scroll.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="lgpdModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalScrollableTitle">LGPD</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line
						breaks to demonstrate how content can exceed minimum inner height, thereby showing inner
						scrolling. When content becomes longer than the predefined max-height of modal, content will be
						cropped and scrollable within the modal.</p>
					<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
					<p>This content should appear at the bottom after you scroll.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>`

)}


export {modal};