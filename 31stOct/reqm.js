ReqMgr=(
	function(){

		var oMgr={
			pending:new PriorityQueue,
			active:new Array(),
			INTERVAL:400,
			MAX_AGE:1000,

			sendToQueue:function(req){
				req.active=false;
				this.pending.put(req);
			},
			sendToServer:function(req){
				if(this.active.length<2){
					nextReq=this.pending.get();
					if(nextReq){
						this.active.push(nextReq);
						nextReq.transport=new XMLHttpRequest();
						nextReq.transport.open(nextReq.method,nextReq.url,true);
						nextReq.transport.send();
						nextReq.active=true;
						

					}
				}
			},
			checkStatus:function(){
				for(var i=this.active.length-1;i>=0;i--){
					req=this.active[i];
					transport=req.transport;
					if(transport.readyState==4){
						this.active.splice(i,1); // remove from active array
						console.log("request completed");
					}
				}
			}
		};		    


		setInterval(function(){
			oMgr.checkStatus();
			oMgr.sendToServer();
		},
		oMgr.INTERVAL);

		return oMgr;
}());