<?php

	extract($_GET);
	$chunk=100;
	$pos=$count*$chunk;
		// first req count=0, pos=0 start from the beginning
		//second req count=1 pos=500 go to 500th pos

	$file=fopen("content.txt","r");

	
	fseek($file,$pos); //go to position
	$data=fread($file,$chunk); //read 500
	echo $data;

?>