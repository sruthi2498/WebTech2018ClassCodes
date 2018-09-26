<?php
	header("Content-type:text/event-stream");
	//ob_start(); //COMMENT THIS OUT IF IT DOES NOT WORK
	while(true){
		echo "event:timer\n";
		echo "data:".date("H:i:s")."\n";
		echo "retry:10000\n\n";
		ob_flush();
		flush();
		sleep(5);
	}
?>