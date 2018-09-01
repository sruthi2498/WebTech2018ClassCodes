<?php

	set_time_limit(0);
	for($i=0;$i<100;$i++){
		$file=fopen("scores.txt","w");
		$score=rand(0,100).";".rand(100,200).";".rand(200,300);
		fwrite($file,$score);
		fclose($file);

		sleep(6);
	}
?>