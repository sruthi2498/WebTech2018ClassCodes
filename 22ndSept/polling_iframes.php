<?php
	//ob_start();
	echo str_pad('',1012);
	ob_flush();
	flush();
	
	//Get the updation time of "data.txt"
	$oldtime = filemtime("data.txt");
	
	while(true)
	{
		//Get the modification time now (new)
		//Clear the cache now.
		clearstatcache();
		
		$newtime = filemtime("data.txt");
		if($newtime > $oldtime)
		{
			$file=fopen("data.txt","r");
			$data=fread($file,filesize("data.txt"));
			$retstr = "File changed. Time : ". $newtime." data : ".$data;
			echo "<script type='text/javascript'>parent.obj.updateDiv('$retstr');</script>";
			ob_flush();
			flush();			
			$oldtime = $newtime;
		}
	
		else // If file is NOT updated, send heartbeat.
		{
			//Send the heartbeat to the client to let him know you are alive
			echo "<script type='text/javascript'>parent.obj.heartbeat();</script>";
			ob_flush();
			flush();
		}
		sleep(2);
	}
?>