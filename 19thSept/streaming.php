<?php
	ob_start();
	echo str_pad(' ',4096);
	ob_flush();
	flush();

	$file=fopen("data.txt","r");
	$oldtime=filemtime("data.txt");

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
		else{
			sleep(5);
			continue;
		}
	}
?>