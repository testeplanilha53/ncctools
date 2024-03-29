<?php
	
	session_start();
	
	if( isset($_SESSION['idUser']) && !empty($_SESSION['idUser']) ){ 

	?>
	

	
<!-- 
    //Autor: Lucas Aguiar e Dione
    //Ultima edição: 30/05/2023
-->


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="titulo">Atendimento via chat</title>

    <link rel="stylesheet" href="estilos/index.css">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

    <!--BOOTSTRAP-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        
    <!--Toastify JS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

    <!--FONTAWOSONE-->
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    <style>
	/* Estilos do botão */
	.botao{
		background: #5E5DF0;
		border-radius: 999px;
		box-shadow: #5E5DF0 0 10px 20px -10px;
		box-sizing: border-box;
		color: #FFFFFF;
		cursor: pointer;
		font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
		font-size: 16px;
		font-weight: 700;
		line-height: 24px;
		opacity: 1;
		outline: 0 solid transparent;
		padding: 8px 18px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		width: fit-content;
		word-break: break-word;
		border: 0;
		text-decoration: none;
		margin-left: 110px;
		position: absolute;
		
	}



	/* Estilos para o link */
	.link{
	  text-decoration: none;
	  color: white;
	  font-weight: bold;
	}
  </style>


	<script>

		//Essa função busca a configuração do botão de Link do CPF
		
		function getEnableButtonCPFLink(){

		  let xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let confBotaoLinkCPF = JSON.parse( this.responseText );
				console.log( confBotaoLinkCPF );
			    	//Retorna 0 ou 1.   
				//1 = Habilitado
				//0 = Desabilitado
			  
		    	}
		 };
			
		  xhttp.open("POST", "./app.php?action=getEnableCPFButton", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhttp.send();

		  console.log('getEnableButtonCPFLink');
			
		}

		//Chaama a função. Recomendado o uso do windows.onload
		getEnableButtonCPFLink();



		
		
	</script>
	

</head>
	
	

<body style="background-color: #35363f; overflow-x: hidden;" onmousemove="mudar_titulo()" id="corpo_tela_principal">
	
	<!--HEADER-->
<header class="conteiner-fluid _header">
  <nav class="navbar text-white m-auto p-2" style="max-width: 1920px; background: rgb(53, 54, 63);">
    <!--MENU-NAV-->
    <label class="navbar-item text-white _header_label">
      <a href="#Criadores|_LUCAS_AGUIAR_|_DIONE_MOURAO" class="navbar-brand text-white p-0 m-0 " data-toggle="tooltip" data-placement="bottom" title="Para atendimentos Faster...">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 18 18">
            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
        </svg>
      NCCTools
      </a>
    </label>

    <span id="botoes_mais_usuais">
        <button type="button" id="fechar" class="btn btn-danger" onclick="javascript:window.close()">Fechar</button>        
        
        <button type="button" id="modelos" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg> 
                <span data-toggle="tooltip" data-placement="bottom" title="Use seus modelos de preenchimento totalmente personalizáveis.">
                    &nbsp Modelos de preenchimento 
                </span>
        </button>
        
        
        <a href="./home.php" target="_blank" id="novo">
            <button type="button" class="btn btn-success">Nova Aba</button>
        </a>

        <!--RELÓGIOS-->
        
        <span id="relogios">
            <span id="button_clock1">

            </span>
            
            <span id="button_clock2">

            </span>
            
            <span id="button_clock3">

            </span>   
            
            <span id="mensagens_monitoradas">

            </span>             
        </span>        		                   
    </span>
        	  
    
    <label class="navbar-item d-flex justify-content-end _header_label">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 18 18" onclick="menu()" onmouseover="menu()">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </label>
  </nav>
  <!--END MENU-NAV-->
</header>

    <!--SIDEBAR-->
<nav class="Menu">
      
  <div class="d-flex flex-column flex-shrink-0 p-3 _menu-sidebar " onmouseleave="menu()" style="height: 100%; background: rgb(21, 34, 56);">
    
    <form class="d-flex" method="get" action="https://ncc.drozbase.cx/search?" target="_blank">
        <label class="navbar-item d-flex justify-content-start _header_label text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 18 18" onclick="menu()">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </label>
    
        <input class="form-control me-2" id="floatingInput" type="search" placeholder="Pesquise no pulpo" aria-label="Search" name="query">
        &nbsp <button class="btn btn-outline-success" type="submit">Pesquisar</button>
    </form>
    
    <hr>
  
    <ul class="nav nav-pills flex-column mb-auto" style="height: 100%;">
    
        <li>
            <a class="nav-link link-dark d-flex align-items-center sidebar_item text-white" id="modelo_noc" class="btn btn-warning" data-toggle="modal" data-target="#padrao_noc">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace"   viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
            </svg> &nbsp
            Padrão NOC
            </a>
        </li>
        
        <li>
            <a class="  nav-link link-dark d-flex align-items-center sidebar_item text-white" id="modelo_financeiro" title="Modelo Financeiro" class="btn btn-warning" data-toggle="modal" data-target="#modal_modelo_financeiro">            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>                
                &nbsp Financeiro
            </a>
        </li>
        
        <li>
            <a class="nav-link link-dark d-flex align-items-center sidebar_item text-white" href="https://ncc.drozbase.com/docs/Atalhos-do-chat-p0g97gjgm3qgwczgnbj4byjd9k?utm_source=share"   title="Atalhos para o chat"    target="_blank" id="link_atalho_chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16">
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                    <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"/>
                </svg>
                &nbsp Atalhos chat
            </a>        
        </li>
        
        <li>        
            <a class="nav-link link-dark d-flex align-items-center sidebar_item text-white" onclick="mudar_tema()" id="tema"  title="Mudar tema" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"   >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                </svg>&nbsp Tema
            </a>
        </li>
        
        <li>        
            <a class="nav-link link-dark d-flex align-items-center sidebar_item text-white" href="config.php"  > 
                <svg xmlns="http://www.w3.org/2000/svg" width="16px"  height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
                &nbsp
                Configurações
            </a>
        </li>

        <li>
            <a href="https://ncc.drozbase.com/docs/Plataforma-de-atendimento-via-chat-(NCCTools)-p0gjrbprqbbwcvatw702pq7xax?utm_source=share" target="_blank" class="nav-link link-dark d-flex align-items-center sidebar_item text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-scooter" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/>
                </svg>
            <span class="mx-2">Treinamento</span>
            </a>
        </li>
        <li>    
             <a class="  nav-link link-dark d-flex align-items-center sidebar_item text-white" id="mudar_tema" title="Mudar tema" class="btn btn-warning" data-toggle="modal" data-target="#modal_mudar_tema">            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16"> <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/> <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/> </svg>
                &nbsp Mudar plano de fundo
            </a>
        </li>

        <li>
            <a class="borda" id="linksRapidos">                           
                <span class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onchange="link_cpf()">
                    <label class="form-check-label" for="flexSwitchCheckChecked">Desabilitar link CPF</label>
                </span>
            </a>   
        </li>

        <li>    
            <a class="nav-link link-dark d-flex align-items-center sidebar_item text-white" id="btn_sair" href="./logout.php" class="btn "   data-toggle="tooltip" data-placement="top" title="Logout">              
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5    12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg> &nbsp Logout
            
            </a>
        </li>
        <br><br><br>

	    Desenvolvedores <br>
        <li>
            <!-- <a href="https://silvadevbr.rf.gd/" class="nav-link link-dark d-flex align-items-center sidebar_item text-white position-relative">
                 Dione Mourão <span class="botao">Novo >> Acesse </span>
            </a> -->

		<a href="https://silvadevbr.rf.gd/" class="nav-link link-dark d-flex align-items-center sidebar_item text-white position-relative">
                 Dione Mourão 
            </a>
        </li>
	<li>
            <a href="#" class="nav-link link-dark d-flex align-items-center sidebar_item text-white">
            	Lucas Aguiar
            </a>
        </li>
    </ul>
</nav>  
	
	
<span id="notificacao"> </span>

    <!-- Modal Notificação de novidades -->
    <div class="modal fade" id="notificacaoNovidades" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <!-- COLOCAR AQUI NO FUTURO -->
            </div>
        </div>
    </div>

    <!-- Modal MUDANÇA TEMA -->
    <div class="modal fade" id="modal_mudar_tema" tabindex="3" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">MUDAR TEMA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">  
                     Imagem de fundo: <br>                                      
                     <input type="text" placeholder="Insira o link da imagem que vc quer como plano de fundo" id="mudar_tema_link" onchange="mudar_tema_link()"> <hr>
                     Cor de fundo de fundo: <br>                                      
                     <input type="color" id="mudar_tema_cor" onchange="mudar_tema_cor()"> <hr>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal PADRÃO FINANCEIRO -->
    <div class="modal fade" id="modal_modelo_financeiro" tabindex="3" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 590px">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">PADRÃO DE REPASSE FINANCEIRO</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="campo_padrao_verificao">                                        
                    R$ <input type="text" class="campo_valor" id="campo_valor1" placeholder="00,00 "> - Data: <input type="text" class="campo_valor" id="data_valor1" placeholder="DD/MM/AAAA"> - Link: <input type="text" class="campo_valor" id="link_valor1" placeholder="http://..."><br>
                    R$ <input type="text" class="campo_valor" id="campo_valor2" placeholder="00,00 "> - Data: <input type="text" class="campo_valor" id="data_valor2" placeholder="DD/MM/AAAA"> - Link: <input type="text" class="campo_valor" id="link_valor2" placeholder="http://..."><br>
                    R$ <input type="text" class="campo_valor" id="campo_valor3" placeholder="00,00 "> - Data: <input type="text" class="campo_valor" id="data_valor3" placeholder="DD/MM/AAAA"> - Link: <input type="text" class="campo_valor" id="link_valor3" placeholder="http://..."><br>
                    R$ <input type="text" class="campo_valor" id="campo_valor4" placeholder="00,00 "> - Data: <input type="text" class="campo_valor" id="data_valor4" placeholder="DD/MM/AAAA"> - Link: <input type="text" class="campo_valor" id="link_valor4" placeholder="http://..."><br>
                    R$ <input type="text" class="campo_valor" id="campo_valor5" placeholder="00,00 "> - Data: <input type="text" class="campo_valor" id="data_valor5" placeholder="DD/MM/AAAA"> - Link: <input type="text" class="campo_valor" id="link_valor5" placeholder="http://..."><br>
                </div>
                <div class="modal-footer">                                    
                    <button type="button" class="btn btn-secondary"  onclick="apagar_modelo_financeiro()">Apagar</button>                    
                    <button type="button" class="btn btn-success" onclick="copiar_modelo_financeiro()">Copiar</button>                    
                </div>
            </div>
        </div>
    </div>
    

    <!-- Modal PADRÃO NOC -->
    <div class="modal fade" id="padrao_noc" tabindex="3" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">PADRÃO DE REPASSE NOC/MONITORIA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="campo_padrao_verificao">                    
                    <input type="text" class="campo_preenchimento_ncc" placeholder="FHTT/ALCL"> <br>
                    <input type="text" class="campo_preenchimento_ncc" placeholder="Usuário"> <br>
                    <input type="text" class="campo_preenchimento_ncc" placeholder="Cidade"> <br>
                    
                    <!-- <input type="text" class="campo_preenchimento_ncc" placeholder="Autenticação"> <br> -->
                    <select class="campo_preenchimento_ncc">
                        <option value="">--Selecione a autenticação--</option>
                        <option value="DHCP">DHCP</option>
                        <option value="PPPoE">PPPoE</option>
                    </select> <br>

                    <input type="text" class="campo_preenchimento_ncc" placeholder="Plano"> <br>
                    <input type="text" class="campo_preenchimento_ncc2" placeholder="Endereço"> <br>
                    <input type="text" class="campo_preenchimento_ncc2" placeholder="Motivo da verificação"> <br>
                    <input type="text" class="campo_preenchimento_ncc" placeholder="Nome"> <br>
                    <input type="number" class="campo_preenchimento_ncc" placeholder="n° de telefone do cliente"> <br> <br> 
                    <button type="button" class="btn btn-danger" >Apresenta risco de acidente?</button>
                    <select class="campo_preenchimento_ncc" style="width: 90px">
                        <option value=""></option>
                        <option value="Não">Não</option>    
                        <option value="Sim">Sim</option>                                                  
                    </select>                    
                </div>
                <div class="modal-footer">                    
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button> -->
                    <button type="button" class="btn btn-secondary"  onclick="apagar_modelo_noc()">Apagar</button>                    
                    <button type="button" class="btn btn-success" onclick="copiar_padrao()">Copiar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Button trigger modal -->
    

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="3" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">PADRÕES DE PREENCHIMENTO</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="botoes_auto_preenchidos">
		    <span class="preenchidos_conteiner">
		    </span>	
                    <strong>Equipamentos Ópticos</strong> <br>                    
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Fiberhome" onclick="fun_Fiberhome()" onmouseover="tooltips_fun_Fiberhome()">Fiberhome</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Datacom" onclick="fun_Datacom()" onmouseover="tooltips_fun_Datacom()">Datacom</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_ONU_NOKIA" onclick="fun_ONU_NOKIA()" onmouseover="tooltips_fun_ONU_NOKIA()">ONU NOKIA</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Conversor_NOKIA" onclick="fun_Conversor_NOKIA()" onmouseover="tooltips_fun_Conversor_NOKIA()">Conversor NOKIA</button>
                    

                    <hr><strong>Suporte</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_falta_de_conexao" onclick="fun_sup_falta_de_conexao()" onmouseover="tooltips_fun_sup_falta_de_conexao()">Falta de conexão</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_lentidao" onclick="fun_sup_lentidao()" onmouseover="tooltips_fun_sup_lentidao()">Lentidão</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_oscilação" onclick="fun_sup_oscilação()" onmouseover="tooltips_fun_sup_oscilação()">Quedas de conexão</button>
                    <br> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_reinicio" onclick="fun_sup_reinicio()" onmouseover="tooltips_fun_sup_reinicio()">Reinício</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_checagem_cabos" onclick="fun_sup_checagem_cabos()" onmouseover="tooltips_fun_sup_checagem_cabos()">Checagem de cabo</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_teste_de_velocidade" onclick="fun_sup_teste_de_velocidade()" onmouseover="tooltips_fun_sup_teste_de_velocidade()">Teste de velocidade</button>
                    <br> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_conexao_normalizada" onclick="fun_sup_conexao_normalizada()" onmouseover="tooltips_fun_sup_conexao_normalizada()">Conexão normalizada</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sup_envio_de_vs" onclick="fun_sup_envio_de_vs()" onmouseover="tooltips_fun_sup_envio_de_vs()">Envio de VS</button>
                    <br> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_ver_noc" onclick="fun_ver_noc()" onmouseover="tooltips_fun_ver_noc()">Verificação com o NOC</button><br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_ver_sup" onclick="fun_ver_sup()" onmouseover="tooltips_fun_ver_sup()">Verificação com a SUPERVISÃO</button><br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_ver_escr" onclick="fun_ver_escr()" onmouseover="tooltips_fun_ver_escr()">Verificação com o ESCRITÓRIO</button><br>

                    <hr><strong>Serviços</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Montagem_de_Rede" onclick="fun_Montagem_de_Rede()" onmouseover="tooltips_fun_Montagem_de_Rede()">Montagem de rede</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Mudanca_de_comodo" onclick="fun_Mudanca_de_comodo()" onmouseover="tooltips_fun_Mudanca_de_comodo()">Mudança de cômodo</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Mudanca_de_comodo_amparo" onclick="fun_Mudanca_de_comodo_amparo()" onmouseover="tooltips_fun_Mudanca_de_comodo_amparo()">Mudança de cômodo - AMPARO</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Transferência_de_endereço" onclick="fun_Transferência_de_endereço()" onmouseover="tooltips_fun_Transferência_de_endereço()">Transf. de endereço</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_Transferência_de_endereço_amparo" onclick="fun_Transferência_de_endereço_amparo()" onmouseover="tooltips_fun_Transferência_de_endereço_amparo()">Transf. de endereço - AMPARO</button> <br>
                    
                    <hr><strong>Financeiro</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_desb3001" onclick="fun_desb3001()" onmouseover="tooltips_fun_desb3001()">Desbl. 3001 disponível</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_desb3001_indisp" onclick="fun_desb3001_indisp()" onmouseover="tooltips_fun_desb3001_indisp()">Desbl. 3001 indisponível</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_desb3001_pag_efetuado" onclick="fun_desb3001_pag_efetuado()" onmouseover="tooltips_fun_desb3001_pag_efetuado()">Desbl. 3001 indisponível - pagamento já efetuado</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_bloqueio_verde" onclick="fun_bloqueio_verde()" onmouseover="tooltips_fun_bloqueio_verde()">Bloqueio verde</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_bloqueio_azul" onclick="fun_bloqueio_azul()" onmouseover="tooltips_fun_bloqueio_azul()">Bloqueio azul</button> <br>

                    <hr><strong>Alteração de senha wi-fi</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_senha_wifi_ip" onclick="fun_senha_wifi_ip()" onmouseover="tooltips_fun_senha_wifi_ip()">Pelo IP de acesso</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_senha_wifi_app" onclick="fun_senha_wifi_app()" onmouseover="tooltips_fun_senha_wifi_app()">Pelo aplicativo</button>

                    <hr><strong>Cancelamento e Troca de titularidade</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_can_titular" onclick="fun_can_titular()" onmouseover="tooltips_fun_can_titular()">Solicitado pelo titular do cadastro</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_can_com_pendencia" onclick="fun_can_com_pendencia()" onmouseover="tooltips_fun_can_com_pendencia()">Cadastro com pendências</button> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_can_outra_pessoa" onclick="fun_can_outra_pessoa()" onmouseover="tooltips_fun_can_outra_pessoa()">Solicitado por outra pessoa</button> <br> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_troca_titularidade" onclick="fun_troca_titularidade()" onmouseover="tooltips_fun_troca_titularidade()">Troca de titularidade</button> <br>

                    <!--NOVO-->
                    <hr><strong>Problemas na conexão</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_nao_repassou_cpf" onclick="fun_nao_repassou_cpf()" onmouseover="tooltips_fun_nao_repassou_cpf()">Não soube repassar o CPF</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_normalizada_sem_procedimento" onclick="fun_normalizada_sem_procedimento()" onmouseover="tooltips_fun_normalizada_sem_procedimento()">Conexão normalizada sem procedimento</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_recusa_procedimento" onclick="fun_recusa_procedimento()" onmouseover="tooltips_fun_recusa_procedimento()">Por recusa de procedimento</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_ip_de_bloqueio" onclick="fun_ip_de_bloqueio()" onmouseover="tooltips_fun_ip_de_bloqueio()">IP de bloqueio</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_prob_ext_conclusao" onclick="fun_prob_ext_conclusao()" onmouseover="tooltips_fun_prob_ext_conclusao()">Problema externo (conclusão de protocolo)</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_prob_ext_suporte" onclick="fun_prob_ext_suporte()" onmouseover="tooltips_fun_prob_ext_suporte()">Problema externo (protocolo em suporte)</button>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_nao_esta_no_local" onclick="fun_nao_esta_no_local()" onmouseover="tooltips_fun_nao_esta_no_local()">Cliente não está no local de instalação</button>
                    
                    <hr><strong>Problemas na TV Faster</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_tv_normalizado" onclick="fun_tv_normalizado()" onmouseover="tooltips_fun_tv_normalizado()">Normalizada pós-procedimento e verf. com o Rodrigo Frag.</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_tv_nao_normalizado" onclick="fun_tv_nao_normalizado()" onmouseover="tooltips_fun_tv_nao_normalizado()">Não normalizada pós-procedimento e verf. com o Rodrigo Frag.</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_tv_normalizado_sem_verificacao" onclick="fun_tv_normalizado_sem_verificacao()" onmouseover="tooltips_fun_tv_normalizado_sem_verificacao()">Normalizada pós-procedimento (sem verf. com o Rodrigo Frag.)</button> 

                    <hr><strong>Informação sobre visita técnica</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_dentro_do_prazo_vs" onclick="fun_dentro_do_prazo_vs()" onmouseover="tooltips_fun_dentro_do_prazo_vs()">Dentro do prazo de 3 dias úteis</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_fora_do_prazo_vs" onclick="fun_fora_do_prazo_vs()" onmouseover="tooltips_fun_fora_do_prazo_vs()">Fora do prazo de 3 dias úteis</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_escritorio_indisp" onclick="fun_escritorio_indisp()" onmouseover="tooltips_fun_escritorio_indisp()">Escritório indisponível para verificação</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_cancelamento_vs" onclick="fun_cancelamento_vs()" onmouseover="tooltips_fun_cancelamento_vs()">Cancelamento da visita antes de ocorrer</button> 

                    <hr><strong>Informação sobre pendências</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_pendencias_atraso" onclick="fun_pendencias_atraso()" onmouseover="tooltips_fun_pendencias_atraso()">Pendências em atraso</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_negociacao_pendencias" onclick="fun_negociacao_pendencias()" onmouseover="tooltips_fun_negociacao_pendencias()">Negociação de pendências</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_pag_duplicado" onclick="fun_pag_duplicado()" onmouseover="tooltips_fun_pag_duplicado()">Pagamento duplicado</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_data_vencimento" onclick="fun_data_vencimento()" onmouseover="tooltips_fun_data_vencimento()">Alterar data de vencimento das faturas</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_formas_pagamento" onclick="fun_formas_pagamento()" onmouseover="tooltips_fun_formas_pagamento()">Formas de pagamento disponíveis</button> 

                    
                    <hr><strong>Emissão de 2ª via da fatura</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_instrucao_via_site" onclick="fun_instrucao_via_site()" onmouseover="tooltips_fun_instrucao_via_site()">Instrução através do site</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_via_sms" onclick="fun_via_sms()" onmouseover="tooltips_fun_via_sms()">Enviado via SMS</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_nota_fical" onclick="fun_nota_fical()" onmouseover="tooltips_fun_nota_fical()">Emissão de nota fiscal</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_troca_plano" onclick="fun_troca_plano()" onmouseover="tooltips_fun_troca_plano()">Troca de plano</button> 

                    <hr><strong>SVA e Token</strong> <br>
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_sva" onclick="fun_sva()" onmouseover="tooltips_fun_sva()">Ativação de SVA’s</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_token_fatura" onclick="fun_token_fatura()" onmouseover="tooltips_fun_token_fatura()">Token para acessar as faturas</button> 
                    <button class="btn btn-outline-dark" data-toggle="tooltip" data-placement="top" title="" id="fun_token_sva" onclick="fun_token_sva()" onmouseover="tooltips_fun_token_sva()">Token para ativar os SVA</button> 

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>


    
    <div class="container" id="tela_atendimento">
        <div class="row">
            <!-- <div class="col">
            </div> -->
            
            <div class="col">
                <div id="celula_atd_1">

                    <div id="dados_iniciais">


                        <input type="text" id="protocolo_chat" placeholder="Protocolo do Chat" style="color: blue;">                        
                        <!-- <input type="text" id="protocolo_adm" placeholder="Protocolo do ADM" onclick="copiar_protocolo_adm()" ondblclick="link_protocolo()" style="color: red;"> <br> -->
                        <input type="number" id="protocolo_adm" placeholder="Protocolo do ADM" onclick="copiar_protocolo_adm()" ondblclick="link_protocolo()" style="color: red;"> <br>

                        <input type="text" id="nome_cliente" placeholder="Nome do cliente" onclick="copiar_nome_cliente()" onchange="mudar_titulo()">
                        <input type="text" id="telefone" placeholder="(xx) y xxxx-xxxx"> <br> <br>

                        <input type="text" id="bfp" placeholder="BFP" value="Padrão Fibra"> <br>

                        <!-- <textarea id="descricao" cols="70" rows="8" onchange="monitorador()" onmousemove="monitorador()" -->
                        <textarea id="descricao" cols="70" rows="8"
                            placeholder="Descreva aqui a demanda do atendimento..."></textarea> <br>
			
                         

            <p id="tags_html" class="tags_show">
			   <button class="btn btn-outline-light" onclick="add_tag('<hr>')" data-toggle="tooltip" data-placement="top" title="Adiciona a quebra de texto com uma linha (--)">&lt;hr&gt;</button>
		    	   <button class="btn btn-outline-light" onclick="add_tag('<br>')" data-toggle="tooltip" data-placement="top" title="Adiciona a quebra de linha (--)">&lt;br&gt;</button>
			   <button class="btn btn-outline-light" onclick="add_tag('<b>')"  data-toggle="tooltip" data-placement="top" title="Tag referente ao inicio do negrito">&lt;b&gt;</button>
			   <button class="btn btn-outline-light" onclick="add_tag('</b>')" data-toggle="tooltip" data-placement="top" title="Tag referente ao final do negrito">&lt;/b&gt;</button>
               <span type="button" id="" class="btn btn-outline-light btn_salvar_pend" onclick="salvar_pendencia()" data-toggle="tooltip" data-placement="top" title="Salve seus atendimentos para que o prox. operador resgate todas informações nas transferências"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16"> <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/> <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/> </svg>
                    &nbspSalvar Atend.
                </span>   			   
			</p>
            			


		    </div>
                    <div id="vs">
                        <span id="t1">Horário de preferência:</span>
                        <span id="hpfr" onchange="fun_h_preferencia()">
                            <select id="h_preferencia" onchange="fun_h_preferencia()">                            
                                <option></option>                        
                                <option value="Manhã">Manhã</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Sem preferência">Sem preferência</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </span>                    
                        <br>
                        <span id="t2">Ponto de referência:</span>                        
                        <input type="search" id="ponto_referencia">
                    </div>

                    <br>
                    <div id="botoes">
                        <div class="container">
                            <div class="row">
                                <!--<div class="col col-lg-3"> </div> -->
                                <div class="col"><button type="button" id="Protocolo" class="btn btn_width btn-warning"
                                        onclick="protocolo()">Protocolo <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg></button></div>
                                <div class="col"><button type="button" id="Copiar" class="btn btn_width btn-warning"
                                        onclick="copiar()"> Copiar <svg xmlns="http://www.w3.org/2000/svg" fill="black" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg> </button></div>
                                <div class="col"><button type="button" id="Transferir" class="btn btn_width btn-warning"
                                        onclick="transferir()">Transferir <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/></svg></button></div>
                                <div class="col"><button type="button" id="Apagar" class="btn btn_width btn-warning"
                                        onclick="Apagar()">Apagar <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></button></div>
                            </div>
                        </div>
                    </div>

                </div>

                <br>

                <section>
                    <div id="btn_atalhos">

                        <div class="container">
                            <div class="row">
                                <div class="col" id="areaCPF">
                                    <button type="button" id="btn_cpf" class="btn btn-secondary btn_atalho2" data-toggle="tooltip" data-placement="top" title="Após copiar o CPF, clique aqui." onclick="cpf()" ondblclick="x()" onchange="cpf_corrigir()">CPF ou CNPJ</button>            
                                </div>
                                <div class="col">
                                    <a href="LGPD.php" target="_blank"> <button type="button" id=""
                                            class="btn btn-secondary btn_atalho2" onclick="" data-toggle="tooltip" data-placement="top" title="Modelo automático LGPD">LGPD</button> </a>
                                </div>
                                <div class="w-100"></div> <br> <div class="w-100"></div>
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho1()">Atalho 1</button> </div>
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho2()">Atalho 2</button></div>
                                <div class="w-100"></div>
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho3()">Atalho 3</button> </div>                                
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho4()">Atalho 4</button> </div>
                                <div class="w-100"></div>
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho5()">Atalho 5</button></div>
                                <div class="col"><button type="button" id="" class="btn btn-info btn_atalho atalho" data-toggle="tooltip" data-placement="top" title="Atalho" onmouseover="muda_title()" onclick="atalho6()">Atalho 6</button> </div>
                                
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </div>
        

    </div>
       

    <script src="funcoes/f_botoes.js"></script>
    <script src="funcoes/f_cpf.js"></script>
    <script src="funcoes/alarmes.js"></script>
    <script src="funcoes/modelos_preenchimento.js"></script>
    <script src="funcoes/padrao_noc.js"></script>
    <script src="funcoes/tooltips.js"></script>
    <script src="funcoes/cronometro.js"></script>
    <script src="funcoes/monitoramento.js"></script>
    

</body>

</html>


<?php
	}else{
		header('Location: index.php');
		exit;
	}
?>
