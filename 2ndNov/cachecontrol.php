<?php 
	
	date_default_timezone_set("Asia/Calcutta");
	$time=time();
	$strtime=date("D,d M,y,H:i:s",$time);
	header("Cache-Control:max-age=10");
	echo $strtime;
?>
