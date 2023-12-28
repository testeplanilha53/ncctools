<?php
	
	session_start();
	//require_once(app/db.php);
	
	if( isset($_SESSION['idUser']) && !empty($_SESSION['idUser']) ){ 
		if(   isset($_SESSION['role']) && $_SESSION['role'] == "admin"){ 
            header('location: add_user.php');
        }
	?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configurações da Plataforma</title>

    <link rel="stylesheet" href="estilos/config.css">

    <!-- Including Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> -->


    <!-- Including jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"> </script>
    

    <!---
        Criei essas funções javascript
    -->
    <script>
	    
	    
	function getSavedCategory(){    
	   let xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var lst_category =  JSON.parse(this.responseText) 
			if( lst_category != false  ){
				var select = document.getElementById("select_lista_categoria");
				lst_category.forEach( (el)=>{
					var opt = document.createElement("option")
					opt.value = el["category"] 
					opt.innerHTML  = el["category"] 
					select.appendChild(opt);
				});   
			}
		  }
	     };
	    xhttp.open("POST", "./app.php?action=getAnswersCategory", true);
	    xhttp.send();
	}    
	    
	    
	getSavedCategory();
	    
        function getAnswers(){
            let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        //notification.innerHTML = this.responseText;
                        let answers = this.responseText;
			//console.log(answers);
                        createTableAnswers( JSON.parse(answers)  );
                        
                    }
                  };
                  xhttp.open("POST", "./app.php?action=getAnswers", true);
                  xhttp.send();

        }
    
	getAnswers();	    
	    
       function createTableAnswers(answers){
           let divConteiner = document.getElementById("conteiner-respostas");
	   console.log(answers)
	   if(answers != false){
		   answers.forEach( (el)=>{
		       let div =  document.createElement("div")
		       div.classList.add("div-answers");

		       let textArea = document.createElement("textarea")
		       textArea.classList.add("txt-answers");	   

		       let labelCategory = document.createElement("p")
		       let labelTitle = document.createElement("p")
		       let labelSla = document.createElement("p")
		       let divRemove = document.createElement("div")
		       let labelBehavior = document.createElement("p")
		       divRemove.classList.add("div-btn"); 
		       divRemove.innerHTML = "<button onclick=deleteAnswer("+ el["id"] +")>Remover</button>"

		       textArea.innerHTML = el["answer"];
		       labelCategory.innerHTML = "Categoria: " + el["category"]
		       labelTitle.innerHTML = "Título: " + el["title"]
		       labelSla.innerHTML = "SLA: " + el["sla"]
		       labelBehavior.innerHTML = "Comportamento: " + el["behavior"]	   

		       div.appendChild(labelCategory);
		       div.appendChild(labelTitle);
		       div.appendChild(labelBehavior);
		       //div.appendChild(labelSla);
			div.appendChild(textArea);
			div.appendChild(textArea);
			div.appendChild(divRemove);

			divConteiner.appendChild(div);
		   } );
	   }
       } 

       function deleteAnswer(id){
	       console.log("ID= " + id );
	      
            let http = new XMLHttpRequest();
            let url = "./app.php?action=deleteAnswer";
            let params = "id="+id;
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {  //Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    let response = this.responseText;
                    //console.log(response)
		    document.location.reload(true);	
                }
            }
            http.send(params);
    		
       }

    
	    

    
    	
    	function getSavedConfig(){             
    	      let notification = document.getElementById("notificacao");
    	      let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        let settings = this.responseText;
                        loadConfig(settings);
                        
                        //chama a função salvar do script config.js
                         salvar();
                    }
                  };
                  xhttp.open("POST", "./app.php?action=getRestBreak", true);
                  xhttp.send();
    	}
    	
    	//chama a função que busca as configurações salvas no banco de dados
    	function loadConfig(settings){
    	    settings = JSON.parse(settings);

		console.log(settings)
		
    	    let shortcuts = document.querySelectorAll(".texto_atalho");
    	    for(let i=0; i < 6; i++){
    	        shortcuts[i].value = settings["shortcut"+(i+1)];
    	    }
    	    
    	    document.getElementById(settings["key_protocol"]).setAttribute("selected", "selected");
    	    document.getElementById("pausa_1").value = settings["pause1"];
    	    document.getElementById("intervalo").value = settings["pause2"];
    	    document.getElementById("pausa_2").value = settings["pause3"];
    	    
    	}
    	
        
    	
    </script> <!--- Criei essas funções javascript -->

    <!-- Including Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
    </script>

</head>
<body style="background-color: rgb(53, 54, 63);" onload="getSavedConfig()" >
    <h1> <strong>Configurações da Plataforma</strong> </h1>
    
    <a id="sair" href="./logout.php" class="btn btn-danger"> 
             Sair 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
    </a>
	
	
<form method="post" action="./app.php?action=setRestBreak"><!--Acrescentei essa linha-->
    <div>
        <div id="atalhos">
            <span id="titulo2">  CADASTRAR ATALHOS  </span> <br> <br>

            <label for="atalho1">Atalho 1</label> <br>
            <input type="text" class="texto_atalho" id="atalho1" name="shortcut1"> <br> <br>
            
            <label for="atalho2">Atalho 2</label> <br>
            <input type="text" class="texto_atalho" id="atalho2" name="shortcut2"> <br> <br>
            
            <label for="atalho3">Atalho 3</label> <br>
            <input type="text" class="texto_atalho" id="atalho3" name="shortcut3"> <br> <br>
            
            <label for="atalho1">Atalho 4</label> <br>
            <input type="text" class="texto_atalho" id="atalho4" name="shortcut4"> <br> <br>
            
            <label for="atalho2">Atalho 5</label> <br>
            <input type="text" class="texto_atalho" id="atalho5" name="shortcut5"> <br> <br>
            
            <label for="atalho3">Atalho 6</label> <br>
            <input type="text" class="texto_atalho" id="atalho6" name="shortcut6"> <br> <br>
            
        </div>
        <br>
	    
        <!-- <div class="borda" id="linksRapidos">                           
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked onchange="att_ativar_link()">
                <label class="form-check-label" for="flexSwitchCheckChecked">Habilitar links rápidos</label>
            </div>
        </div>    -->
	    
        <br>

        <div id="chave_p">
            <label for="key_protocolo">Chave Protocolo: </label>        
            <select id="key_protocolo" name="key_protocol" required><!--Adicionei o required-->
                <option value="" data-default disabled selected></option>  <!--Acrescentei essa linha-->                     
                <option value="op1" id="op1" >Ponto (.) </option><!--alterei o value -->
                <option value="op2" id="op2">Vírgula (,) </option><!--alterei o value -->
                <option value="op3" id="op3">Ponto e vírgula (;) </option><!--alterei o value -->
            </select> <br> <br>
        </div>
        <br>
            <!--
            Cor de fundo página principal: 
            <input type="color" id="cor_fundo" value="#35363f" onchange="mud_cor_fundo()"> <br><br>
            Cor das fontes: 
            <input type="color" id="cor_fundo" value="#FFFFFF" onchange="mud_cor_fonte()"> <br><br>
            -->
        

        <div id="pausas">
        <span id="titulo">  CADASTRAR NOTIFICAÇAO DE PAUSA   </span> <br> <br>
        01ª Pausa 10 min: <input type="time" class="texto_atalho2" id="pausa_1" name="pause1" > <br><!--adicionei o name -->
        Intervalo 20 min: <input type="time" class="texto_atalho2" id="intervalo" name="pause2" > <br><!--adicionei o name -->
        02ª Pausa 10 min: <input type="time" class="texto_atalho2" id="pausa_2" name="pause3" > <br><!--adicionei o name -->
        </div>
            
        <br> <br>


    </div>

    <div id="Salvar">    
        
        <input type="submit" class="btn btn-warning"  value="Salvar" onclick="salvar()">  <br>  <br>
        
        <a href="./home.php" class="btn btn-success"> 
        Home 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>
        </a>

    </div>  
    
</form><!--Acrescentei essa linha-->
	
    <div id="tags">
        <form method="post" action="./app.php?action=enableTags">
        <label for="html">Habilitar tags</label>
        <input type="radio" id="html" name="enable_tag" value="1">
        <label for="css">Desabilitar tags</label>
        <input type="radio" id="css" name="enable_tag" value="0">
            <input type="submit" value="Salvar" id="tag_submit" class="btn btn-warning" style="position: relative; left: 80px; ">
        </form>
    </div>   	



	
    <div id="tags2">
        <form method="post" action="./app.php?action=enableCPFButton">
        <label for="html">Habilitar link CPF</label>
        <input type="radio" id="html" name="enable_tag" value="1">
        <label for="css">Desabilitar link CPF</label>
        <input type="radio" id="css" name="enable_tag" value="0">
            <input type="submit" value="Salvar" id="tag_submit" class="btn btn-warning" style="position: relative; left: 80px; ">
        </form>
    </div>  



	

	

    <div id="cadastrar_resposta">
	    <span id="titulo">  CADASTRAR MODELO DE RESPOSTA   </span> <br> <br>
	    <form method="post" action="./app.php?action=setModelAnswer">
		<label>Categoria*: </label>
	    	<select name="lista_de_titulos_usuario" required id="select_lista_categoria">
	    		<option value="Respostas pessoais" selected >Respostas pessoais</option>
		    </select><br>
		<label>Nova categoria: </label> 
	    	<input type="text" name="nova_categoria" placeholder="Opcional" maxlength="40"> <br>
		<label>Título da resposta*: </label> 
	    	<input type="text" name="titulo_usuario" placeholder="Obrigatório!" maxlength="100" required><br>
		<!-- <label>SLA(PRAZO): </label> -->
	    	<!-- <input type="text" name="sla_usuario" placeholder="Opcional!"><br> -->
		<label>Comportamento*: </label>
	    	<select name="lista_comportamento" required id="select_lista_comportamento"> 
	    		<option value="padrao_azul">Padrão aditivo [Azul]</option>
			<option value="padrao_vermelho" selected>Padrão completo [Vermelho]</option>
		    </select><br>
		<label>Script personalizado</label><br> 
	    	<textarea rows="5" name="resposta_usuario" placeholder="Digite aqui sua resposta" required></textarea><br>
		<input type="submit" value="Cadastrar">
	    </form>
    </div>
	
   <div id="conteiner-respostas">
	   
   </div>
	   
	
    
    <div id="notificacao"> </div>

        
   

    <script src="funcoes/config.js"></script> 

</body>
	    
	    
	    <style>
		    
		    #conteiner-respostas, #cadastrar_resposta, #tags, #tags2{
		    	border: solid 1px gray;
			    padding: 10px;
			   
		    }
		    
		    #cadastrar_resposta textarea{
		    	width: 100%;
		    }
		    .div-answers{
			    border: solid 1px gray;
			    padding: 10px;
			    margin: 0 !important;
		    }

		    .txt-answers{
		    	width: 100%;   
		    }
		    
		    .div-btn{
		    	margin: 0 !important;
			padding: 0 !important;
		    }
	
	    </style>

</html>



<?php
	}else{
		header('Location: index.php');
		exit;
	}
?>
