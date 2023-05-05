 	<?php
		
		require_once('conection.php');

		$query = "DELETE FROM `saved_pending`  WHERE  `date` <= CURRENT_DATE) "; 

		$pdo = new Connect();
		$db = $pdo->connectOnDb();
		$answer = $pdo->delete($db, $query);

	?>
