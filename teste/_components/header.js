function  header(){
    return(
		`
		<!-- As a link -->
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Tools 2.0</a>
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
								<li><a class="dropdown-item" href="/configuracoes.html">Configurações</a></li>
								<hr>
								<li><a class="dropdown-item" href="#">Sair</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		`
)}


export {header};