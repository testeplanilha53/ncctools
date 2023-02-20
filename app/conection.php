<?php
    /*
     *    version: 1.0.0
     *    license: MIT
     *    author: Dione Silva
    */
	
	class Connect{
	

		public function connectOnDb(){
			    $host = 'sql202.epizy.com';
                $name = 'epiz_33390424_ncctools_db';
                $user = 'epiz_33390424';
                $password = '8HCXRuTotgyINb';
                $dsn = "mysql:host=$host; dbname=$name;charset=utf8"; 
				//$db = new PDO('mysql:host= xx ;dbname=xx;charset=utf8', 'xx', 'xxx');
				$db = new PDO($dsn, $user , $password);  //00webhost

				return $db;
			
		}
		
		
		/* sigin platform */
		function login($db, $username, $password){
		     try{
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$stmt = $db->prepare('SELECT * FROM users WHERE  user = :user and password = md5(:password)');
			  	$stmt->bindParam(':user', $username);
			   	$stmt->bindParam(':password', $password);
			  	$stmt->execute();
			  	
			  	if($stmt->rowCount()  > 0 ){
			  		$user = $stmt->fetch(PDO::FETCH_ASSOC);
			  		session_start();
                    if($user['status'] == "active"){
                        $_SESSION['idUser'] =  $user['id'];
                        $_SESSION['role'] = $user['role'];
                        $_SESSION['user'] =  $username;
                        $_SESSION['password'] = $password;

                        $file = fopen($_SERVER["SERVER_ROOT"]."/all_logs/log-".date("d-m-Y").".txt", "a+");
                        fwrite($file, "Login: ".$username." on ".date("d-m-Y H:i:s")."\r\n" );
                        fclose($file);
                        return true;
                    }else{
                        return false;
                    }
					
				}else{
	  			 	return false;
	  			}
			}catch( PDOException $Exception){
    			echo ( $Exception->getMessage()   ) ;
				echo ( (int)$Exception->getCode() );
			}
		}   
		
		
        /*Insert data*/
        public function create($db, $table, $values){
      
            $arr = array( "INSERT INTO `".$table."` VALUES (".$values.") ;" ); 
            
		    
		    try{
		        
		        foreach ($arr as $query) {
                        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        				$stmt = $db->prepare($query);
        			  	$stmt->execute();
                }
			  	
			}catch( PDOException $Exception){
    			echo ( $Exception->getMessage()   ) ;
				echo ( (int)$Exception->getCode() );
			}
		    
		    
		}


        /*  Update user config */
		public function update($db, $query){	   
		    try{
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt = $db->prepare($query);
                $stmt->execute();
                
                return $stmt->rowCount();
                        
               
			  	
			}catch( PDOException $Exception){
    			echo ( $Exception->getMessage()   ) ;
				echo ( (int)$Exception->getCode() );
			}
		    
		    
		}

        /*Read User data*/
		public function read($db, $query){
			try{
			        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        			$stmt = $db->prepare($query);
        			$stmt->execute();
        			
        			
        			if($stmt->rowCount()  > 0 ){
    			  		$settings = $stmt->fetchAll(PDO::FETCH_ASSOC);
    					return $settings;
    				}else{
    	  			 	return false;
    	  			}
        			  	
        			  	
			}catch( PDOException $Exception){
    			echo ( $Exception->getMessage()   ) ;
				echo ( (int)$Exception->getCode() );
			}
		}
		
	}

	 /*Delete User data*/
		public function delete($db, $query){
			try{
			        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        			$stmt = $db->prepare($query);
        			$stmt->execute();
        			
        			
        			if($stmt->rowCount()  > 0 ){
    			  		$settings = $stmt->fetchAll(PDO::FETCH_ASSOC);
    					return $settings;
    				}else{
    	  			 	return false;
    	  			}
        			  	
        			  	
			}catch( PDOException $Exception){
    			echo ( $Exception->getMessage()   ) ;
				echo ( (int)$Exception->getCode() );
			}
		}
		
	}

?>
