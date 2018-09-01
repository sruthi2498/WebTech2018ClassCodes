<?php
	$file=fopen("scores.txt","r");
	$data=fread($file,filesize("scores.txt"));
	echo $data;
?>