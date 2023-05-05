 	<?php
		
		require_once('conection.php');

		$query = "DELETE FROM `saved_pending`  WHERE  `date` <= CURRENT_DATE - INTERVAL 2 DAY "; 

		$pdo = new Connect();
		$db = $pdo->connectOnDb();
		$answer = $pdo->delete($db, $query);


		//echo date('Y-m-d', strtotime('-1 days', strtotime('2017-11-07')));

	?>
