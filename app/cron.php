<?php
    set_time_limit(0);

    //verificra se a pasta TEMP possui algum arquivo
    //Se existir vai verificar se o arquivo possui mais de 15 minutos
    //Se verdadeiro exclui o arquivo

    $cond = 0;

    function delTree($dir) { 
        $today = date("Y-m-d H:i:s");
        $files = array_diff( scandir($dir), array('.','..') ); 

        foreach ($files as $file) { 
            $date_end = date("Y-m-d H:i:s", filemtime($dir.$file) );
            
            $dif = checkTime($date_end, $today );
            if($dif <= 0){
                $diff2 = checkTime2($date_end, $today );
                //echo $diff2."<br>";
                $hour = intval( substr($diff2, 0, 2)  );
                $min = intval( substr($diff2, 3, 5)  );
                //echo($min."<br>");
                if($hour > 0 || $min > 10){
                    unlink("$dir/$file");
                    $file = fopen($_SERVER["SERVER_ROOT"]."/all_logs/log-".date("d-m-Y").".txt", "a+");
                    fwrite($file, "Cron - deleted:'". $file ."' on ".date("d-m-Y H:i:s")."\r\n" );
                    fclose($file);
                    
                }
            }
        } 
    }

    function checkTime($date_end, $today ){
        $end = new DateTime( substr($date_end, 0, -9) );
        $current = new DateTime( substr($today, 0, -9) );
        $result = $current->diff($end);
        return (intval( $result->format('%R%a') ) );
    }


    function checkTime2($date_end, $today ){
        $end = new DateTime( substr($date_end, 11, -1) );
        $current = new DateTime( substr($today, 11, -1) );
        $result = $current->diff($end)  ;
        return ( $result->format('%H:%I:%S') );

    }


    while($cond < 5){
        delTree('../temp/');
        usleep(5000000 * 12);
        $cond = $cond + 1;
    }



    


?>