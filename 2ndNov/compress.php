<?php 
	header("Content-encoding:gzip");
	$filename="data.txt";
	$f=fopen($filename,"r");
	$data=fread($f,filesize($filename));
	$compressed=gzencode($data,9);
	//echo $compressed;
	//var_dump($_SERVER);

	$enocding=$_SERVER["HTTP_ACCEPT_ENCODING"];
	echo $enocding;
?>
