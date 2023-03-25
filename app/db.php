<?php
    /*
     *    version: 1.0.0
     *    license: MIT
     *    author: Dione Silva
    */

	require_once('conection.php');
	
	header('Content-Type: application/json; charset=utf-8');
	
	
	if( $_GET['action'] == 'yes'){

        var_dump($_POST);

		$user = addslashes( str_replace(' ', '', $_POST['user'] )  );
		$password = addslashes( str_replace(' ', '', $_POST['password'] ) ) ;
        $pdo = new Connect();
		$db = $pdo->connectOnDb();
		$status = $pdo->login($db, $user, $password);
		
		if($status){
			header('location: config.php');
		}else{
			header('location: index.php?action=error');
		}
	}
	
    /*Cadastra usuario*/
    if(isset($_GET['action']) && $_GET['action'] == "setUser"){
	    session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
                $mail =  str_replace(' ', '', $_POST['mail']) == "" ?  "DEFAULT" : "'".$_POST['mail']."'" ;
	            $values = "DEFAULT, DEFAULT, '". $_POST['role'] ."','". $_POST['username']."','".$_POST['user']."','".md5($_POST['password']). "',". $mail.", DEFAULT";             
                
                $pdo = new Connect();
	            
	            $db = $pdo->connectOnDb();
		        $pdo->create($db,"users", $values);

	        }
	    }
	    
	    header('location:add_user.php?action=yes');
	}
	
    /*Inativa usuário*/
    if(isset($_GET['action']) && $_GET['action'] == "inactivateUser"){
	    session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
                $values = "UPDATE `users` SET `status`='".$_POST['class']."' WHERE `id` =".$_POST['id'].";" ;             
                $pdo = new Connect();
	            $db = $pdo->connectOnDb();
                $response = $pdo->update($db, $values);
		        echo ($response);

	        }
	    }
	    
	}


    /*busca os usuarios cadastrados*/
    if(isset($_GET['action']) && $_GET['action'] == "getUsers"){
        session_start();
        if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
	            $query = "SELECT id, name, user, role, mail, status  FROM `users` "; 
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		        $users = $pdo->read($db, $query);
                $users = json_encode($users);
                echo ( $users);
	        }
	    }

    }


    /*busca as informações de configuração do usuário*/
	if(isset($_GET['action']) && $_GET['action'] == "setRestBreak"){
	    session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
	            $settings =  json_encode($_POST, JSON_UNESCAPED_UNICODE);
	            $pdo = new Connect();
                $query = "UPDATE `users` SET `config`='".$settings."' WHERE id=".$_SESSION['idUser'].";" ;
	            $db = $pdo->connectOnDb();
		        $pdo->update($db, $query);
	        }
	    }
	    
	    header('location:config.php');
	}
	
	 /*cadastra nova informação de configuração do usuário*/
	if(isset($_GET['action']) && $_GET['action'] == "getRestBreak"){
	    session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
                $query = "SELECT `config` FROM `users` WHERE `id` = ".$_SESSION['idUser'].";";
                $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		        $settings = $pdo->read($db, $query );

		        echo($settings[0]["config"]);
		        
	        }
	    }
	}

	// Envia a senha para o e-mail cadastrado
    
	if(isset($_GET['action']) && $_GET['action'] == "resetMail"){
        require_once('mail_recovery.php');
        require_once('email.php');

        $email = trim( $_POST['email'] );
        $query = "SELECT `mail` FROM `users` WHERE `mail` = '".$email."';";

        echo $query;
        $pdo = new Connect();
	    $db = $pdo->connectOnDb();
		$thereUser = $pdo->read($db, $query );

        if(!$thereUser){
             header('location: index.php?action=errorSend'); // E-mail não cadastrado
        }else{
            
            $recovery = new MailRecovery($email);
            $array = $recovery->createTempFile();
          
            if( $array[0] == true ){
                $url = $_SERVER["HTTP_ORIGIN"]."/temp/".$array[1] ;

                echo $url;
                
                if( $recovery-> sendFile($url, $email) ){
                    header('location: index.php?action=passwordSend');
                }else{
                    header('location: index.php?action=errorSend');  
                }
                
            }
            
            
        }
        
	}
	
    

    if(isset($_GET['action']) && $_GET['action'] == "recoveryMail"){
        if( isset($_POST['newpassword']) && !empty($_POST['newpassword']) ) {
            require_once('email.php');

            $url = parse_url(  $_SERVER["HTTP_REFERER"]  );
            $file = basename($url["path"], '.php').'.php';
            $email = basename($url["path"], '.php');
            $email =  base64_decode($email);
		
	    //var_dump($url);
	    //echo $email;

            $query = "UPDATE `users` SET `password`= '".md5($_POST['newpassword'])."' WHERE `mail` = '".$email."';";

            //echo $query;
            //var_dump($file);

            
            $pdo = new Connect();
	        $db = $pdo->connectOnDb();
		    $data = $pdo->update($db, $query );  

            
            if(file_exists($_SERVER["SERVER_ROOT"]."/temp/".$file)){
                unlink($_SERVER["SERVER_ROOT"]."/temp/".$file);
		$pdo->create($db, "all_logs", "DEFAULT, 'Email - reset success:','".$username."', '".date("Y-m-d")."','".date("H:i:s")."'"   );     
                $file = fopen($_SERVER["SERVER_ROOT"]."/all_logs/log-".date("d-m-Y").".txt", "a+");
                fwrite($file, "Email - reset success:".$email." on ".date("d-m-Y H:i:s")."\r\n" );
                fclose($file);
            }

             
            if($data > 0){
                 header('location: index.php?action=success');  
            }else{
                header('location: index.php?action=errorSend');
            }
		
         
    
        }   
	}
    
	
	//setModelAnswer
	if(isset($_GET['action']) && $_GET['action'] == "enableTags"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
			
			var_dump($_POST);
			
			
			$enableTag = $_POST["enable_tag"]; 
	            	$pdo = new Connect();
                	$query = "UPDATE `users` SET `tags_enable`= $enableTag WHERE id=".$_SESSION['idUser'].";" ;
	            	$db = $pdo->connectOnDb();
		        $pdo->update($db, $query);
	        }
	    }
	    
	    header('location:config.php');
	}//fim getTagsStatus



	if(isset($_GET['action']) && $_GET['action'] == "getTagsStatus"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
		    $id_user = $_SESSION['idUser'];
	            $query = "SELECT `tags_enable` FROM `users` WHERE `id` = $id_user "; 
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		    $answer = $pdo->read($db, $query );
		    header('Content-Type: application/json');	
		    $array = json_encode($answer, JSON_UNESCAPED_UNICODE );
                   echo ( $array);	
			
	        }
	    }
	    
	}




	//setModelAnswer
	if(isset($_GET['action']) && $_GET['action'] == "setModelAnswer"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
			$category = empty( trim($_POST['nova_categoria']) ) ?  trim($_POST['lista_de_titulos_usuario']) : trim($_POST['nova_categoria']) ;
			$title = trim($_POST['titulo_usuario']) ; 
			$sla  =  empty( trim($_POST['sla_usuario']) ) ?  "Sem sla" : trim( $_POST['sla_usuario'] ) ;
			$id_user = $_SESSION['idUser'];
			$id_answer = trim($_POST['resposta_usuario']);
			$behavior = trim($_POST['lista_comportamento']);
			
			$values= "DEFAULT, $id_user ,'$category' ,'$title' , '$sla' , '$id_answer', '$behavior' ";
			
			//var_dump($values);
		    //INSERT INTO `users_answers`(`id`, `user_id`, `category`, `title`, `sla`, `answer` , `behavior`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		    $pdo->create($db,"users_answers", $values);
	        }
	    }
	    
	    header('location:config.php');
	}
	
	if(isset($_GET['action']) && $_GET['action'] == "getAnswers"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
		    $id_user = $_SESSION['idUser'];
	            $query = "SELECT `id`, `category`,  `title`, `sla`, `answer` , `behavior` FROM `users_answers` WHERE `user_id` = $id_user ORDER BY `category` "; 
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		    $answer = $pdo->read($db, $query );
		    header('Content-Type: application/json');	
		    $array = json_encode($answer, JSON_UNESCAPED_UNICODE );
                   echo ( $array );	
			
	        }
	    }
	    
	}


	if(isset($_GET['action']) && $_GET['action'] == "deleteAnswer"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
		    $id_user = $_SESSION['idUser'];
		    $id_answer = $_POST['id'];
	            $query = "DELETE FROM `users_answers` WHERE `id` =  $id_answer"; 
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		    $answer = $pdo->delete($db, $query);
                   echo ( $answer );	
			
	        }
	    }
	    
	}

	//getAnswersCategory
	if(isset($_GET['action']) && $_GET['action'] == "getAnswersCategory"){
            session_start();
	    if( isset($_SESSION['user']) && !empty($_SESSION['user']) ){ 
	        if( isset($_SESSION['password']) && !empty($_SESSION['password']) ){
		    $id_user = $_SESSION['idUser'];
	            $query = "SELECT DISTINCT `category` FROM `users_answers` WHERE `user_id` = $id_user ORDER BY `category` "; 
	            $pdo = new Connect();
	            $db = $pdo->connectOnDb();
		    $answer = $pdo->read($db, $query );
		    header('Content-Type: application/json');	
		    $array = json_encode($answer, JSON_UNESCAPED_UNICODE );
                   echo ( $array );	
			
	        }
	    }
	    
	}

?>
