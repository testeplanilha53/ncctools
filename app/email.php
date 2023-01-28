<?php

    /*
     *    version: 1.0.0
     *    license: MIT
     *    author: Dione Silva
    */


//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


//Load Composer's autoloader
//require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions


class Email{
    public $d_email;
    public $d_value;


    function __construct($email, $value){
        $this->d_email = $email;
        $this->d_value = $value;
    }

    public function send_mail(){

        //var_dump($this->d_email, $this->d_password);

        try {
            $mail = new PHPMailer(true);
            $mail->CharSet = 'UTF-8';
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'testeplanilha53@gmail.com';                     //SMTP username
            $mail->Password   = 'vmzbkynpecnrzgrl';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          //Enable implicit TLS encryption  PHPMailer::ENCRYPTION_SMTPS; 
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMler::ENaiCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('ncctools.recovery@gmail.com', 'TelChat - Recuperação de senha!');
            $mail->addAddress($this->d_email, $this->d_email);     //Add a recipient
            //$mail->addAddress('ellen@example.com');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Recuperação de senha!';
            $mail->Body    = "O link possui duração de 10 minutos!!<br>Clique no link para resetar a senha: ".$this->d_value;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            //echo 'Message has been sent';

            return true;
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            return false;
        }
        
    }
}


?>
