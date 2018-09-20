<?php
	extract($_GET);
	$file=fopen("data.txt","r");

	
	if($t){$oldtime=$t;}
	else{ $oldtime=0;}

	while(true){
		//first clear cache
		clearstatcache();
		$newtime=filemtime("data.txt");
		if($newtime>$oldtime){

			$data=fread($file,filesize("data.txt"));
			$res=$data.";".$newtime;
			echo $res;
			break;
		}
		else{
			sleep(5);
			continue;
		}
	}
?>