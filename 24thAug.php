<?php
			header("Content-type:image/jpeg");
			extract($_GET);


			if($uname=="user1" || $uname=="user2" || $uname=="user3" ){
				//Username not available
				imagejpeg(imagecreate(1,1));
				//imagecolorallocate($im, 255, 255, 255);
				//($im);

			}
			else{
				//Username available
				$im=imagecreate(2,2);
				imagecolorallocate($im, 255, 255, 255);
				imagejpeg($im);
			}
?>
