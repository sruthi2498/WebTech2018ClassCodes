<?php

	
	$res=array();
	extract($_GET);
	if($fname=="pizza"){
		$res["cs"]="Italian";
		$res["price"]="200";
		$res["veg"]="non-veg";
		
		
	}
	else if($fname=="cornflakes"){
		$res["cs"]="Continental";
		$res["price"]="500";
		$res["veg"]="Veg";
		
		
	}
	else if($fname=="dosa"){
		$res["cs"]="Indian";
		$res["price"]="100";
		$res["veg"]="veg";
		
		
	}
	else if($fname=="akkiroti"){
		$res["cs"]="South Indian";
		$res["price"]="150";
		$res["veg"]="veg";
		
	}



//Send output as json
//convert a php array to json usong json_encode
	$ret=json_encode($res);
	echo $ret;
?>