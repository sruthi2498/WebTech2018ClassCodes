<?php
	
	$res=array();
	if($_SERVER["REQUEST_METHOD"]=="GET"){
		extract($_GET);
		if($srn=="001"){
			$res["status"]=200;
			$res["message"]="success";
			$res["data"]="9.9";
		}
		else{
			$res["status"]=200;
			$res["message"]="failure";
			$res["data"]=null;
		}
	}
	else if($_SERVER["REQUEST_METHOD"]=="PUT"){
		$str=file_get_contents("php://input");
		//$string="srn=x&cgpa=y"
		$string=explode("&", $str);
		//$string[0]="srn=x" $string[1]="cgpa=y"
		$srn_arr=explode("=", $string[0]);
		$srn=$srn_arr[0];
		//$srn=x
		$cgpa_arr=explode("=", $string[1]);
		$cgpa=$cgpa_arr[0];
		//$cgpa=y
		/*
		$data=$srn.":".$cgpa;
		$file=fopen("data.txt","w"); -> Permission denied
		if($file){
			fwrite($file,$data);
			fclose($file);

			$res["status"]=200;
			$res["message"]="updated";
			$res["data"]=null;
		}
		else{
			$res["status"]=200;
			$res["message"]="failure";
			$res["data"]=null;
		}*/

		$res["status"]=200;
		$res["message"]="updated";
		$res["data"]=null;
		
		
	}
	echo json_encode($res);

?>