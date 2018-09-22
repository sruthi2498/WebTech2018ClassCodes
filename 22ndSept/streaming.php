<?php
	//ob_start(); // COMMENT THIS OUT IF IT DOES NOT WORK
	//BEFORE PROGRAM STARTS RUNNING : buffer should be empty
	echo str_pad(' ',4096);
	ob_flush();
	flush();

	$file=fopen("data.txt","r");

	clearstatcache();
	$oldtime=0;

	while(true){
		//first clear cache
		clearstatcache();
		$newtime=filemtime("data.txt");

		if($newtime>$oldtime){

			$data=fread($file,filesize("data.txt"));
			$res=$data.";".$newtime;
			echo $res; 
			ob_flush();
			flush();
			$oldtime=$newtime;

		}
		sleep(2);
	}
?>