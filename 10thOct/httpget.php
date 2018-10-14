<?php
	$res=array();
	if($_SERVER['REQUEST_METHOD']=='GET'){
	
		extract($_GET);
		$data=array("t1"=>array("no"=>1,"task"=>"task1","done"=>true),
		"t2"=>array("no"=>2,"task"=>"task2","done"=>true),
		"t3"=>array("no"=>3,"task"=>"task3","done"=>true));		
	}
	
	echo json_encode($data);
?>