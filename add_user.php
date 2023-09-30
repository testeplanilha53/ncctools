<?php
	
	session_start();
	//require_once(app/db.php);
	
	if( isset($_SESSION['idUser']) && !empty($_SESSION['idUser']) ){ 
        
	?>
	



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configurações da Plataforma</title>

    <link rel="stylesheet" href="estilos/add_user.css">

    <!-- Including Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> -->


    <!-- Including jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js">
    </script>

    <!-- Including Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
    </script>

    <script>
        function getUsers(){
            let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        //notification.innerHTML = this.responseText;
                        let users = this.responseText;

                        createTableUsers( JSON.parse(users)  );
                        
                    }
                  };
                  xhttp.open("POST", "./app.php?action=getUsers", true);
                  xhttp.send();

        }
    
       function createTableUsers(users){
           let table = document.getElementById("users");
           users.forEach( (el)=>{
               let tr =  document.createElement("tr")
               //tr.id = el["id"]
                    tr.innerHTML =  "<td>" + el["name"]+"</td>" +
                                    "<td>" + el["user"]+ "</td>" +
                                    "<td>" + el["role"]+ "</td>" +
                                    "<td>" + el["mail"]+ "</td>"+
                                    "<td> <div id="+ el["id"] +" class='btn-default "+el["status"]+"' onclick='inactivateUser(this)' ><div class='btnCheck'></div></div>  </td>"

    
                table.appendChild(tr);
           } );
       } 

       function inactivateUser(el){
            /*
            var xhr = new XMLHttpRequest();
            xhr.open('POST', "./app.php?action=inactivateUser", true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                let response = this.responseText;

                        console.log(response)
            };
            xhr.send('user=person&pwd=password&organization=place&requiredkey=key');*/
            let tClass = el.className.split(' ')[1]
            let http = new XMLHttpRequest();
            let url = "./app.php?action=inactivateUser";
            let params = "";
            http.open('POST', url, true);
            if(tClass=="active"){
                params = 'id='+el.id+'&class=inactive';                 
            }else if("inactive"){
                params = 'id='+el.id+'&class=active';                   
            }


            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {  //Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    let response = this.responseText;
                    console.log(response)
                    if(response=="1"){
                        console.log(response)
                        document.getElementById(el.id).classList.remove(tClass)
                        if(tClass=="active"){
                            document.getElementById(el.id).classList.add("inactive")
                        }else if("inactive"){
                            document.getElementById(el.id).classList.add("active")
                        }
                    }
                }
            }
            http.send(params);
            
       }

  

       function getAdmCode(){
            let admCodeEl = document.getElementById("cod_adm")
            let xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        //notification.innerHTML = this.responseText;
                        let codeAdm =  JSON.parse( this.responseText );

                        console.log( codeAdm[0].code )
                        admCodeEl.value = codeAdm[0].code
                        
                    }
                  };
                  xhttp.open("POST", "./app.php?action=getAdmCode", true);
                  xhttp.send();

        }
    


        function setAdmCode(){
            let admCode = document.getElementById("cod_adm").value
            var http = new XMLHttpRequest (); // nova instância de HttpRequest 
            var url = "./app.php?action=setAdmCode&admcode=" + admCode; // URL do seu arquivo PHP 
            http.open("POST", url, true); // abre a conexão com o método POST e modo assíncrono 
            http.setRequestHeader ("Content-type", "application/x-www-form-urlencoded"); // define o cabeçalho do tipo de conteúdo 
            http.onreadystatechange = function () { // define uma função para ser chamada quando o estado da requisição mudar 
                if (http.readyState == 4 && http.status == 200) { // se a requisição for concluída com sucesso 
                    // faça algo com a resposta 
                    console.log ("código enviado com sucesso!"); // imprime a resposta no console 
                } 
            }; 
            http.send (); // envia os dados para o servidor   

        }


        


    </script>

    <style>

        #users{
            background: gray;
            width: 100%;
            max-width: 836px;
            //display: block;
            margin: 50px auto;
        }
    
        #users td{
            border: solid 1px;
            padding: 3px;

        }

        .btn-default{
            width: 50px;
            height: 22px;
            background-color: gray;
            margin: 0 auto;
            border-radius: 11px;
            border: solid 1px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 1px;
        }

        .btn-default.active{
            width: 50px;
            height: 22px;
            background-color: green;
            margin: 0 auto;
            border-radius: 11px;
            border: solid 1px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-right: 1px;
            justify-content: flex-end;

        }

        .btnCheck{
            width: 18px;
            height: 18px;
            background-color: white;
            margin: 0;
            border-radius: 9px;
            border: solid 1px;
            transition: width 1s;
        }



    </style>


</head>
<body style="background-color: rgb(53, 54, 63);" onload="getUsers()">
    
    <h1> <strong>Bem vindo Admin </strong> </h1>


    <div>
        <form method="POST" action="./app.php?action=setUser">
            
                <div id="atalhos">
                    <span id="titulo2">  CADASTRAR OU REMOVER  </span> <br> <br>

                    <label for="username">NOME</label> <br>
                    <input type="text" class="texto_atalho" id="username" name="username" required> <br> <br> 
                    <label for="atalho1">USUÁRIO</label> <br>
                    <input type="text" class="texto_atalho" id="usuario" name="user" required> <br> <br>            
                    <label for="atalho2">SENHA</label> <br>
                    <input type="text" class="texto_atalho" id="senha" name="password" required> <br> <br> 
                    <label for="mail">E-MAIL</label> <br>
                    <input type="text" class="texto_atalho" id="mail" name="mail" placeholder="Opcional"> <br> <br> 
                    <label for="type">TIPO</label> <br>
                    <select class="texto_atalho" id="type" name="role" required>
                        <option value="user" >Usuário</option>
                        <option value="admin" >Administrador</option>
                    </select> 


                    
                     <button type="submit" id="Cadastrar" class="btn btn-warning" >Cadastrar usuário</button> <!-- onclick="cadastrar()" -->
                

                </div>
            

        </form>

        <br> <br>

        <div>
                <div id=codADM>
                    <span id="titulo3">  CADASTRAR CÓDIGO ADM  </span> <br> <br>
                    <input type="text" class="texto_atalho" id="cod_adm" name="cod_adm" placeholder="Código ADM" required> <br> <br>
                    <button onclick="getAdmCode()" class="btn btn-warning" >Visualizar Código</button> <!-- onclick="cadastrar()" -->
                    <button onclick="setAdmCode()"  class="btn btn-warning" >Salvar Código</button> <!-- onclick="cadastrar()" -->
                </div>
        </div>


   
            <table id="users" >
                <tr>
                    <td>NOME</td>
                    <td>USUÁRIO</td>
                    <td>FUNÇÃO</td>
                    <td>E-MAIL</td>
                    <td>SITUAÇÃO</td>
                </tr>
            </table>
          
    </div>
    
    <div id="notificacao"></div>

    <script src="funcoes/add_user.js"></script>

</body>

</html>



<?php
        if($_GET['action'] == "yes" ){
            echo("<script> cadastrar(); </script>"); 
        }


	}else{
		header('Location: index.php');
		exit;
	}
?>
