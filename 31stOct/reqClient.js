urls=["submit.php","poll.php","abc.txt","submit.php","submit.php","poll.php","submit.php","poll.php"]
methods=["GET","POST","POST","GET","POST","GET","GET","POST"]
priority=[1,3,3,4,7,6,5,4]

outer=0;
while(outer<8){
	for(var i=0;i<8;i++){
		ReqMgr.sendToQueue(
		{
			url:urls[i],
			method:methods[i],
			priority:priority[i],
			age:0, // start with age 0
			data:null
		});
	}
	outer++;
}