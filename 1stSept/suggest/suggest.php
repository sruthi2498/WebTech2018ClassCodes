<?php
extract($_GET);
$file=fopen("food.txt","r");
$res=array();

while(!feof($file)){
	$line=trim(fgets($file)); // read each line
	if(strncasecmp($line, $term, strlen($term))==0){ //compare line and term
		$res[]=$line;
	}
}
echo json_encode($res);
	
?>
	
	