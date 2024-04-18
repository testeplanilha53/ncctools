<!-- 
    Atualizado em 20/01/23 por Lucas Aguiar
    Alterações:
        cursor: pointer → no resetMail

-->

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
    <title>Plataforma de atendimento</title>

    <!--BOOTSTRAP-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


    <style>
                
        #resetMail:hover{
            color: red !important;
            transform: scale(1.1);
            cursor: pointer
        }

        svg:hover{        
            transform: scale(1.1);            
        }

        html {
            height: 100%;
            box-sizing: border-box;
            width: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: linear-gradient(#141e30, #35363f);
        }

        .login-box {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400px;
            padding: 30px;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, .5);
            box-sizing: border-box;
            box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
            border-radius: 10px;
        }

        .login-box h2 {
            margin: 0 0 30px;
            padding: 0;
            color: #fff;
            text-align: center;
        }

        .login-box .user-box {
            position: relative;
        }

        .login-box .user-box input {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;
        }

        .login-box .user-box label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            pointer-events: none;
            transition: .5s;
        }

        .login-box .user-box input:focus~label,
        .login-box .user-box input:valid~label {
            top: -20px;
            left: 0;
            color: #ffffff;
            font-size: 12px;
        }

        .login-box form button {
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            color: #ffffff;
            font-size: 16px;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            transition: .5s;
            margin-top: 40px;
            letter-spacing: 4px
        }

        .login-box button:hover {
            background: #f40303;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #ff0000,
                0 0 25px #f40303,
                0 0 50px #f40303,
                0 0 100px #f40303;
        }

        .login-box button span {
            position: absolute;
            display: block;
        }

        .login-box button {
            border: none;
            background: none;
        }


        .login-box button span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #f40303);
            animation: btn-anim1 1s linear infinite;
        }

        @keyframes btn-anim1 {
            0% {
                left: -100%;
            }

            50%,
            100% {
                left: 100%;
            }
        }

        .login-box button span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #f40303);
            animation: btn-anim2 1s linear infinite;
            animation-delay: .25s
        }

        @keyframes btn-anim2 {
            0% {
                top: -100%;
            }

            50%,
            100% {
                top: 100%;
            }
        }

        .login-box button span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #f40303);
            animation: btn-anim3 1s linear infinite;
            animation-delay: .5s
        }

        @keyframes btn-anim3 {
            0% {
                right: -100%;
            }

            50%,
            100% {
                right: 100%;
            }
        }




        .login-box button span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #f40303);
            animation: btn-anim4 1s linear infinite;
            animation-delay: .75s
        }

        @keyframes btn-anim4 {
            0% {
                bottom: -100%;
            }

            50%,
            100% {
                bottom: 100%;
            }
        }


        #footer{
            box-sizing: border-box;
            position: fixed;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            padding: 0 5px 0 5px; 
            width: 100%;
            bottom: 0;
            height: 40px;
        }

        #footer a{
            color: white !important;
            text-decoration: none;
            margin-left: 5px;    
            text-align: center;
        }



        /* Estilos para o modal */
        .modal {
          display: none;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .modal-content {
          background-color: #fff;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 60%;
        }
        
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }


                        .ag-format-container {
                  width: 900px;
                  margin: 0 auto;
                  //background-color: red;
                }



                .ag-courses_box {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  flex-direction: column;
                
                  padding: 0;

                   position: absolute;
                  top: 20px;
                }
                .ag-courses_item {
                  -ms-flex-preferred-size: calc(33.33333% - 30px);
                  flex-basis: calc(50.33333% - 30px);
                
                  margin: 0 15px 30px;
                
                  overflow: hidden;
                
                  border-radius: 30px;
                }
                .ag-courses-item_link {
                  display: block;
                  padding: 30px 20px;
                  background-color: #121212;
                
                  overflow: hidden;
                
                  position: relative;
                }
                .ag-courses-item_link:hover,
                .ag-courses-item_link:hover .ag-courses-item_date {
                  text-decoration: none;
                  color: #FFF;
                }
                .ag-courses-item_link:hover .ag-courses-item_bg {
                  -webkit-transform: scale(10);
                  -ms-transform: scale(10);
                  transform: scale(10);
                }
                .ag-courses-item_title {
                  min-height: 5px;
                  margin: 0 0 25px;
                
                  overflow: hidden;
                
                  font-weight: bold;
                  font-size: 30px;
                  color: #FFF;
                
                  z-index: 2;
                  position: relative;
                }
                .ag-courses-item_date-box {
                  font-size: 18px;
                  color: #FFF;
                
                  z-index: 2;
                  position: relative;
                }
                .ag-courses-item_date {
                  font-weight: bold;
                  color: #f9b234;
                
                  -webkit-transition: color .5s ease;
                  -o-transition: color .5s ease;
                  transition: color .5s ease
                }
                .ag-courses-item_bg {
                  height: 188px;
                  width: 188px;
                  background-color: #f9b234;
                
                  z-index: 1;
                  position: absolute;
                  top: -75px;
                  right: -75px;
                
                  border-radius: 50%;
                
                  -webkit-transition: all .5s ease;
                  -o-transition: all .5s ease;
                  transition: all .5s ease;
                }
                .ag-courses_item:nth-child(2n) .ag-courses-item_bg {
                  background-color: #3ecd5e;
                }
                .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
                  background-color: #e44002;
                }
                .ag-courses_item:nth-child(4n) .ag-courses-item_bg {
                  background-color: #952aff;
                }
                .ag-courses_item:nth-child(5n) .ag-courses-item_bg {
                  background-color: #cd3e94;
                }
                .ag-courses_item:nth-child(6n) .ag-courses-item_bg {
                  background-color: #4c49ea;
                }
                
                
                
                @media only screen and (max-width: 979px) {
                  .ag-courses_item {
                    -ms-flex-preferred-size: calc(50% - 30px);
                    flex-basis: calc(50% - 30px);
                  }
                  .ag-courses-item_title {
                    font-size: 24px;
                  }
                }
                
                @media only screen and (max-width: 767px) {
                  .ag-format-container {
                    width: 96%;
                  }
                
                }
                @media only screen and (max-width: 639px) {
                  .ag-courses_item {
                    -ms-flex-preferred-size: 100%;
                    flex-basis: 100%;
                  }
                  .ag-courses-item_title {
                    min-height: 72px;
                    line-height: 1;
                
                    font-size: 24px;
                  }
                  .ag-courses-item_link {
                    padding: 22px 40px;
                  }
                  .ag-courses-item_date-box {
                    font-size: 16px;
                  }
                }



    </style>
</head>

<body>

    <!-- O modal -->
      <!--
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Uma nova plataforma foi lançada como alternativa ao NCC Tools!</h2>
           <p>Não é necessário criar nova conta. Entre com o login e senha já criado para o NCC Tools</p>
        <p>Todos os principais recursos foram implementados com melhorias. Tenha acesso a novos recursos que facilitarão no seu dia a dia. Acesse clicando nesse link. <a href="https://silvadevbr.rf.gd">  Clique aqui</a> <p>ou cole no seu navegador  https://silvadevbr.rf.gd   </p>
           
        </p>
          
      </div>
    </div>
    -->

        <!-- O modal -->
         <!--
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Temos uma nova versão da plataforma de atendimento!</h2>
        <p>Não é necessário criar nova conta. Entre com o login e senha já criado para o NCC Tools</p>
        <p>Todos os principais recursos foram implementados com melhorias. <br> 
           Tenha acesso a novos recursos que facilitarão no seu dia a dia. <br>
           Acesse clicando nesse link. <a href="https://silvadevbr.rf.gd">  Clique aqui</a> <p>ou cole no seu navegador  https://silvadevbr.rf.gd     
        </p>
        <br><hr>
            <p>Caso queira permanecer nessa versão basta fechar essa mensagem 🐳..</p>
      </div>
    </div>
    -->

    <!-- <div class="alert alert-primary" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong> 🤝 Lembre-se dos idealizadores do NCCTools: Monitor (Lucas Aguiar), Operador (Dione Mourão) || Prazo para votação até 08/12/2023.</strong> </div> -->



    <div class="login-box">

        
        <!--
        <svg fill="rgb(255,255,255)" style="width: 60px; display: block; margin: auto; padding-bottom: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/> 
        </svg>
        -->

        <!-- <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASdG98NUNFQzRkFTVUxKSjBRS0VJR1pQMUJYTkw0Ti4u" target="_blank" 
            style="
                position: inherit;
                z-index: -1;
                left: 34%;
                top: -37%;
            ">
            <img id="urna" src="   https://cdn-icons-png.flaticon.com/512/6449/6449089.png " width="150" height="150" alt="" title="" class="img-small"> 
            <br> --Click para votar!--
        </a> -->

<!-- 
        <img id="arvore" src="https://media.giphy.com/media/T5OAkYDx7IXz5Bb1cb/giphy.gif" width="90" height="90" alt="árvore de natal grátis ícone" title="árvore de natal grátis ícone" style="
            position: inherit;
            z-index: -1;
            left: 74%;
            top: 2%;
        " onclick="alert('🎅Feliz Natal!')">

        <img id="presente" src="https://cdn-icons-png.flaticon.com/512/9271/9271589.png" width="36" height="36" alt="presente grátis ícone" title="presente grátis ícone" style="
            position: inherit;
            z-index: -1;
            left: 80%;
            top: 15%;
        ">


        <img id="chapeu_natal" src="https://cdn-icons-png.flaticon.com/512/13153/13153671.png" width="60" height="60" alt="chapéu de natal grátis ícone" title="chapéu de natal grátis ícone" style="
            margin: auto;
            position: fixed;
            left: 42%;
            top: 0%;
            z-index: 1;
        "> -->
        
        <svg   xmlns="http://www.w3.org/2000/svg"  width="100%" height="65px"
            <g  > 
                <path transform="translate(85,-90)"  style="fill:#ffffff;"  d="m 83.275268,93.230224 c -9.80879,0 -17.884037,7.557986 -18.709612,17.156406 -0.07691,0.8942 0.658591,1.62369 1.556382,1.62369 0.609148,0 1.094125,-0.73008 1.183321,-1.62306 0.810605,-8.11535 7.63694,-14.427493 15.969909,-14.427493 8.332965,-10e-7 15.160462,6.312143 15.971174,14.427493 0.07201,0.72078 0.554778,1.33475 1.210308,1.54495 l -0.0371,3.2e-4 c 0.0207,4.41567 -1.719203,8.65652 -4.834255,11.78622 -2.45947,2.47102 -5.615398,4.08721 -9.008091,4.65835 -0.25183,-0.63077 -0.866985,-1.0741 -1.589721,-1.0741 h -3.423282 c -0.948276,0 -1.711639,0.76336 -1.711639,1.71164 0,0.94828 0.763363,1.71164 1.711639,1.71164 h 3.423282 c 0.549936,0 1.037259,-0.2572 1.350007,-0.65786 3.920732,-0.54619 7.583281,-2.35762 10.40795,-5.19556 3.40145,-3.41744 5.30948,-8.04316 5.30954,-12.86254 h 6.4e-4 c 0,-0.0111 -3e-4,-0.0222 -3.2e-4,-0.0333 -3e-5,-0.0175 4e-4,-0.0349 3.2e-4,-0.0524 h -10e-4 C 102.00798,101.60826 93.602302,93.230223 83.275268,93.230224 Z m -0.087,5.128569 a 13.566256,13.566256 0 0 0 -13.454992,13.639777 13.566256,13.566256 0 0 0 13.602946,13.49214 13.566256,13.566256 0 0 0 13.529294,-13.56612 l -6.39e-4,-0.14827 A 13.566256,13.566256 0 0 0 83.188269,98.358793 Z m -12.70347,35.828237 c -8.088087,0 -14.599262,8.748 -14.599262,19.61479 a 4.1167567,4.1167567 0 0 0 4.551673,3.63029 h 45.861211 a 4.1167567,4.1167567 0 0 0 4.55168,-3.63029 c 0,-10.86679 -6.51149,-19.61479 -14.599585,-19.61479 z" />
            </g>
        </svg>
        
        
        <h2>Bem-vindo</h2>

        <form method="post" action="./app.php?action=yes"> <!-- acrescentei essa linha -->
            <div class="user-box">
                <input type="text" id="usuário" name="user" required="">
                <label>Usuário</label>
            </div>
            <div class="user-box">
                <input type="password" id="senha" name="password" required="">
                <label>Senha</label>
            </div>

            <!--12/01 Acrescentado essa linha-->
            <span style="color: white; font-size: 14px; display: block; margin: 5px; auto; text-align: center;" id="resetMail" onclick="window.modalDialog.showModal();">
            Esqueceu sua senha? </span> 
            

            <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </button>
        </form>

    </div>


        <!--12/01 Acrescentado essa linha-->
        <dialog id="modalDialog"  style="width: 400px; height: 100px; padding: 30px;">
            <button style="position: sticky; top: -10%; left: 110%;" onclick="window.modalDialog.close();" aria-label="close" novalidate>X</button>
            <p>Digite seu e-mail e clique em enviar. </p>
            <form method="post" action="./app.php?action=resetMail">                
                <input style="width: 300px;" type="mail" name="email" placeholder="Digite seu e-mail">            
                <button class="button-close" onclick="delBtn(this)" id="modalDialog-btn" >ENVIAR</button>
            </form>            
        </dialog>


        <dialog id="error"  style="width: 400px; height: 100px; padding: 30px;">
                <button style="position: sticky; top: -10%; left: 110%;" onclick="window.error.close();" aria-label="close" novalidate>X</button>
                <p>Usuário ou senha incorreto!</p>         
        </dialog>
          
        <dialog id="passwordSend"  style="width: 400px; height: 100px; padding: 30px;">
                <button style="position: sticky; top: -10%; left: 110%;" onclick=" window.passwordSend.close();"  aria-label="close" novalidate>X</button>
                <p>Um link de recuperação foi enviado para seu e-mail. Pode levar alguns segundos!</p>         
        </dialog>
          
        <dialog id="errorSend"  style="width: 400px; height: 100px; padding: 30px;">
                <button style="position: sticky; top: -10%; left: 110%;" onclick="window.errorSend.close();"aria-label="close" novalidate>X</button>
                <p>Nenhuma alteração foi feita. Procure o administrador :)!</p>         
        </dialog>
        
        <dialog id="success"  style="width: 400px; height: 100px; padding: 30px;">
                <button style="position: sticky; top: -10%; left: 110%;" onclick="window.success.close();" aria-label="close" novalidate>X</button>
                <p>Senha alterada com sucesso!</p>         
        </dialog>
          

        <footer id="footer">
            <h6><a>Desenvolvedores: </a></h6>
            <h6 style="color:white;"><a href="#">dione.mourao@ncc.faster.com.br</a></h6>
            <h6 style="color:white;"><a href="#">lucas.aguiar@ncc.faster.com.br</a></h6>
        </footer>

      
        <script>
            // Quando a página for carregada, exibir o modal
            window.onload = function() {
              var modal = document.getElementById("myModal");
              var span = document.getElementsByClassName("close")[0];
            
              modal.style.display = "block";
            
              // Fechar o modal quando clicar no botão "x"
              span.onclick = function() {
                modal.style.display = "none";
              };
            
              // Fechar o modal quando clicar fora do conteúdo
              window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              };
            };

            
            function delBtn(el){
                setTimeout(() => {
                    el.remove()
                    }, "1000")
            }
        
        </script>
        
</body>
</html>




<?php   

                   


                    if (isset($_GET['p'])) {
                        $abcdef = base64_decode($_GET['p']);
                        //echo('<h1>' . $abcdef . '</h1>');


                        $dataAtual = new DateTime();
                        //echo "Data atual: " . $dataAtual->format("Y-m-d");

                        if($dataAtual->format("Y-m-d") == $abcdef){
                            echo('<div class="ag-format-container">
                                  <div class="ag-courses_box">
                                    <div class="ag-courses_item">
                                      <a href="http://vitrine.rf.gd" class="ag-courses-item_link" >
                                        <div class="ag-courses-item_bg"></div>
                                
                                        <div class="ag-courses-item_title">
                                          Acesse a vitrine de projetos para ficar atento aos novos apps
                                        </div>
                                  
                                        <span class="ag-courses-item_date">
                                            18.04.2024
                                          </span>
                                        
                                      </a>
                                    </div>
                                  </div>
                                </div>');
                        }
                        
                    } else {
                        echo('<div class="ag-format-container">
                                  <div class="ag-courses_box">
                                    <div class="ag-courses_item">
                                      <a href="http://vitrine.rf.gd" class="ag-courses-item_link" >
                                        <div class="ag-courses-item_bg"></div>
                                
                                        <div class="ag-courses-item_title">
                                          Acesse a vitrine de projetos para ficar atento aos novos apps
                                        </div>
                                  
                                        <span class="ag-courses-item_date">
                                            18.04.2024
                                          </span>
                                        
                                      </a>
                                    </div>
                                  </div>
                                </div>');
                    }
    
                    if( isset($_GET['action']) && $_GET['action'] == "error" ){
                         echo('<script>window.error.showModal(); </script>');
                         echo('<script>
                         setTimeout(() => {
                            window.location.replace('. $_SERVER["SERVER_NAME"] .') }, "2000") </script>');
                        
                    }
    
                    if( isset($_GET['action']) && $_GET['action'] == "passwordSend" ){
                         echo('<script>window.passwordSend.showModal() </script>');
                         echo('<script>
                         setTimeout(() => {
                            window.location.replace('. $_SERVER["SERVER_NAME"] .') }, "2000") </script>');
                         
                        
                    }
    
                     if( isset($_GET['action']) && $_GET['action'] == "errorSend" ){
                         echo('<script>window.errorSend.showModal(); </script>');
                         echo('<script>
                         setTimeout(() => {
                            window.location.replace('. $_SERVER["SERVER_NAME"] .') }, "2000") </script>');
                        
                    }
    
                     if( isset($_GET['action']) && $_GET['action'] == "success" ){
                         echo('<script>window.success.showModal(); </script>');
                         echo('<script>
                            setTimeout(() => {
                            window.location.replace('. $_SERVER["SERVER_NAME"] .') }, "2000") </script>');
                    }

 ?>
