<?php
	header("Content-type:text/xml");

	$news=file_get_contents("olympics.xml");

	echo $news;
?>