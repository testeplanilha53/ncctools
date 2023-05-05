 	<?php
		
		require_once('conection.php');

		$query = "DELETE FROM `saved_pending`  WHERE  `date` >= CURRENT_DATE) "; 

		$pdo = new Connect();
		$db = $pdo->connectOnDb();
		$answer = $pdo->delete($db, $query);
		
		$today = date("Y-m-d);
		$other = date("Y-m-d  2023-05-04");
		
		if($today > $other ){
			echo "É maior";
		
		}


	?>
