<?php 
 $ip=json_decode (file_get_contents("php://input"),true);
 $_POST=$ip;
 extract ($_POST);
 echo $uname."saved succesfully";
 
 ?>