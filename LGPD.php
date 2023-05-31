<?php
	
	session_start();
	
	if( isset($_SESSION['idUser']) && !empty($_SESSION['idUser']) ){ 

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de dados</title>


    <!--BOOTSTRAP-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>



    <link rel="stylesheet" href="estilos/LGPD.css">

</head>

<body style="background-color: rgb(53, 54, 63);">  <!-- rgb(40,42,54) --> 
    <h1>Atualização de contatos</h1>
    <section id="at_contatos">
        Telefone 01 : <input type="text" id="tel1" class="campo_editavel"> <br>
        Telefone 02 : <input type="text" id="tel2" class="campo_editavel"> <br>
        Telefone 03 : <input type="text" id="tel3" class="campo_editavel"> <br>
        Telefone 04 : <input type="text" id="tel4" class="campo_editavel"> <br> <br>
        E-mail: <input type="text" id="email" class="campo_editavel"> <br>
    </section>
    <br>
    <div id="botoes">
        <button type="button" id="transferir" class="btn btn-info" onclick="transferir_dados()">Transferir dados</button>        <br>   <br>
        <button type="button" id="copiar" class="btn btn-info" onclick="copiar()">Copiar</button>              <br>   <br>
        <button type="button" id="apagar" class="btn btn-danger" onclick="apagar()">Apagar</button>
    </div>
    <!--
    <br><br>
    <textarea id="areaParaColarOTexto" style="width: 400px; height:30px; display:block; margin: 50px auto;"  
                            onkeypress="transferir2()"  onmousemove="transferir2()" 
                            placeholder="Cole as informações do ADM aqui"
                            ></textarea>--> 

    

    
    <br><br>
    <div id="notificacao"></div>
    <div id="notificacao2"></div>

    <script src="/funcoes/LGPD.js"></script>

    
</body>

</html>




<?php
	}else{
		header('Location: index.php');
		exit;
	}
?>
