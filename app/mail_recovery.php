<?php
    /*
     *    version: 1.0.0
     *    license: MIT
     *    author: Dione Silva
    */
    class MailRecovery{
        public $d_email;

        function __construct($email){
            $this->d_email = $email;
        }
        public function createTempFile(){
            $filename = base64_encode($this->d_email).'.php';
            $fileHome = "temp/";

            $fileModel =   ' <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Recuperação de senha</title>
                        
                            <style>
        
                                #resetMail:hover{
                                    color: red !important;
                                    transform: scale(1.1);
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
                                
                                
                                .showAlert{
                                    color: red;
                                }
                                .hiddenAlert{
                                    display: none !important;
                                }

                                </style>
                    </head> 
                    <body>
                      

                        <div class="login-box">
                            <svg  style="width: 60px; display: block; margin: auto; padding-bottom: 10px;"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"  fill="rgb(255,255,255)" /></svg>
                            <h2>Recuperação de senha</h2>
                            <form  action="/app.php?action=recoveryMail" method="post">
                                <div class="user-box" >
                                    <input type="password" name="" required=""  class="firstPass">
                                    <label>Senha</label>
                                </div>
                                <div class="user-box ">
                                    <input type="password" name="newpassword" required="" class="lastPass" 
                                       > 
                                    <label>Confirme a senha</label>

                                    <span class="showAlert hiddenAlert">As senhas não coincidem!</span>
                                </div>


                                <button >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Enviar
                                </button>
                            </form>
                         </div>
                            
                         <script src="/funcoes/email.js"></script>
                    </body>

                    </html>
            ';

            try {
                if(file_exists($fileHome.$filename)){
                    unlink($fileHome.$filename);
                }else{
                    touch($fileHome.$filename); 
                    $file = fopen($_SERVER["SERVER_ROOT"]."/all_logs/log-".date("d-m-Y").".txt", "a+");
                    fwrite($file, "Email - reset: ".$_SESSION['user']." on ".date("d-m-Y H:i:s")."\r\n" );
                    fclose($file);
                }
                file_put_contents($fileHome.$filename, $fileModel);
            }catch (Exception $e) {
                echo 'Error: ',  $e->getMessage(), "\n";
                return array(false);
            }

            return array(true, $filename) ;
        }

        
        public function sendFile($url, $email){
            require_once('email.php');

            $email = new Email($email, $url);
            
            return $email->send_mail() ;

        }
        

    }







?>
