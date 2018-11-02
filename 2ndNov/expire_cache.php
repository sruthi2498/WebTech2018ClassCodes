<?php 
	
	date_default_timezone_set("Asia/Calcutta");
	$time=time();
	$exptime=time()+10; 

	$strtime=date("D,d M,y,H:i:s",$time);
	$expstrtime=date("D,d M,y,H:i:s",$exptime);
	header("Expires:$expstrtime");
	echo $strtime;
?>
