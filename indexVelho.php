<!-- 
    Atualizado em 14/01/23 por Dione Silva
    Alterações:
        Adicionado sistema de recurepação de e-mail e feito melhorias na interface

-->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="estilos/estilo_login.css">
    <style>
        #resetMail:hover{
            color: red !important;
            font-size: 16px !important;
        }

    </style>


</head>

<body>

    
            
<form method="post" action="./app.php?action=yes"> <!-- acrescentei essa linha -->
    
    <div id="area_login">
        <div id="saudacao"> Bem-vindo</div> <br>
        <input id="usuário" type="text" placeholder="usuário" name="user">  <br>
        <input id="senha" type="password" placeholder="senha" name="password">  <br>   

        <span style="color: white; font-size: 14px; display: block; margin: 5px; auto; text-align: center;" id="resetMail" onclick="window.modalDialog.showModal();">
        Esqueceu a senha? Clique aqui.</span> <!--12/01 Acrescentado essa linha-->


        <div class="container" action="" >
            <div class="center">
            <button id="btn" class="btn" onclick="login()">
                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                </svg>
                <span>Login</span>
            </button>
                </div>
            </div>  

        </div> 
        
    <script src="funcoes/js_login.js"></script>
    <script src="funcoes/js_DASH.js"></script>
</form> <!-- acrescentei essa linha -->

        <!--12/01 Acrescentado essa linha-->
        <dialog id="modalDialog"  style="width: 300px; height: 100px; padding: 30px;">
            <p>Digite seu e-mail e clique em enviar. </p>
            <form method="post" action="./app.php?action=resetMail">
            <input type="mail" name="email" placeholder="digite seu e-mail">
            
            <button class="button-close">ENVIAR</button>
            </form>
        </dialog>
    

</body>
    
</html>


<?php   
    
                if( isset($_GET['action']) && $_GET['action'] == "error" ){
                     echo('<script>alert("Usuário ou senha incorreto!")</script>');
                
                }

                if( isset($_GET['action']) && $_GET['action'] == "passwordSend" ){
                     echo('<script>alert("Um link de recuperação foi enviado para seu e-mail. Pode levar alguns segundos!")</script>');
                
                }

                 if( isset($_GET['action']) && $_GET['action'] == "errorSend" ){
                     echo('<script>alert("Nenhuma alteração foi feita. Procure o administrador :)!")</script>');
                
                }

                 if( isset($_GET['action']) && $_GET['action'] == "success" ){
                     echo('<script>alert("Senha alterada com sucesso!")</script>');
                
                }
     ?>


