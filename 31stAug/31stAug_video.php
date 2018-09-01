<?php
	
	header("Content-type:video/mp4");
	$file=fopen("http://localhost/class/31stAug/test.mp4","rb");
	$data=fread($file,filesize("http://localhost/class/31stAug/test.mp4"));
	echo $data;
?>