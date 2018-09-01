<html>
	<head>
		<script>	

			var obj={
				xhr: new XMLHttpRequest(),
				getDetails:function(){
					//when readyState changes, call fn showFile
					this.xhr.onreadystatechange=this.showFile;

					var fname=document.getElementById("fname").value;
					this.xhr.open("PUT","http:http://localhost/class/29thAug/29thAug_xhr.php?fname="+fname,true);
					this.xhr.send();
				},
				showFile:function showFile(){
					//in showfile current object is obj.xhr
					if(this.readyState==4 && this.status==200){

						var res=this.responseText; //as text string
						//convert to json object
						var resJson=JSON.parse(res);
						document.getElementById("cs").value=resJson.cs;
						document.getElementById("price").value=resJson.price;
						document.getElementById("veg").value=resJson.veg;
					}
				}
			}
		
		</script>
	</head>
	<body>
		Food <input type="text" name="fname" id="fname" onblur="obj.getDetails()"/><br>
		Cuisine <input type="text" name="cs" id="cs"/><br>
		Price<input type="text" name="price" id="price"/><br>
		Veg <input type="text" name="veg" id="veg"/>
 	</body>
</html>