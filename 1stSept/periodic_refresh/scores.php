<?php
	$file=fopen("scores.txt","r");
	$data=fread($file,filesize("scores.txt"));
	sleep(2);
	echo $data;
?>