<?php
    session_start();

    unset($_SESSION['idUser']);

    $file = fopen("all_logs/log-".date("d-m-Y").".txt", "a+");
    fwrite($file, "Logout: ".$_SESSION['user']." on ".date("d-m-Y H:i:s")."\r\n" );
    fclose($file);

    header("Location: index.php");
?>
