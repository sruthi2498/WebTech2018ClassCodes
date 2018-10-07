<?php
	extract($_GET);
	$dataarr=array("srn"=>$srn,"cgpa"=>$cgpa);
	$data=http_build_query($dataarr);

	$header=array("Content-type:application/x-wwww-form-urlencoded");

	$req=array("http"=>array("method"=>"PUT",
							 "header"=>$header,
							 "content"=>$data));


	$context=stream_context_create($req);

	$retval=file_get_contents("http://localhost/class/3rdOct/student/update",false,$context);
	echo $retval;
?>