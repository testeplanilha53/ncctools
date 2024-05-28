function  header(){
    return(
    `
<!-- Area de apps -->
			<!--
			<div class="nav-scroller bg-body rounded shadow-sm border bg-dark-subtle">
				<nav class="nav nav-underline" aria-label="Secondary navigation">
					<a class="nav-link" href="https://ncctools.epizy.com/teste/#">
						Notificações
						<span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
					</a>
					<a class="nav-link" href="https://ncctools.epizy.com/teste/#">Documentação</a>
					<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#textModelsModal"
						href="https://ncctools.epizy.com/teste/#">Modelos</a>
					<a class="nav-link" data-bs-toggle="modal" data-bs-target="#nocModal"
						href="https://ncctools.epizy.com/teste/#">App NOC</a>
					<a class="nav-link" data-bs-toggle="modal" data-bs-target="#servicesModal"
						href="https://ncctools.epizy.com/teste/#">App Serviços</a>
					<a class="nav-link" data-bs-toggle="modal" data-bs-target="#lgpdModal"
						href="https://ncctools.epizy.com/teste/#">App LGPD</a>

				</nav>
			</div>
			-->

			<!-- Aba de clientes  -->
			<ul class="nav nav-tabs bg-body rounded shadow-sm border bg-dark-subtle">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
						aria-expanded="false">Ana</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Alterar nome</a></li>
						<li><a class="dropdown-item" href="#">Alterar tag de cor</a></li>
						<li><a class="dropdown-item" href="#">Deixar pendente</a></li>
						<li>
							<hr class="dropdown-divider">
						</li>
						<li><a class="dropdown-item" href="#" onclick="AlterClient()">Fechar</a></li>
					</ul>
				</li>

				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle nav-link active" data-bs-toggle="dropdown" href="#"
						role="button" aria-expanded="false">Jose</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Alterar nome</a></li>
						<li><a class="dropdown-item" href="#">Alterar tag de cor</a></li>
						<li><a class="dropdown-item" href="#">Deixar pendente</a></li>
						<li>
							<hr class="dropdown-divider">
						</li>
						<li><a class="dropdown-item" href="#">Fechar</a></li>
					</ul>
				</li>

				<li class="nav-item">
					<a class="nav-link" href="#">Jessica</a>
				</li>

				<li class="nav-item" onclick="AddClient()">
					<a class="nav-link disabled" aria-disabled="true">Adicionar</a>
				</li>

			</ul><!-- Nav tab clientes -->

			`
)}


export {header};