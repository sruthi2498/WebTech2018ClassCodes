<?php 
	header("Content-encoding:gzip");
	$filename="data.txt";
	$f=fopen($filename,"r");
	$data=fread($f,filesize($filename));
	

	$enocding=$_SERVER["HTTP_ACCEPT_ENCODING"];
	if(strpos($enocding,"gzip")!==false){
		
		$compressed=gzencode($data,9);
		echo $compressed;
	}
	else if(strpos( $enocding,"deflate")!==false){
		$compressed=gzdeflate($data);
		echo $compressed;
	}
	else{
		echo "NO encoding";
	}
?>
