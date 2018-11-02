function PriorityQueue(){
	//properties
	this.items=new Array();

}
PriorityQueue.prototype={
	get:function(){
		//shift = remove from start 
		return this.items.shift();
	},
	put:function(req){
		// add to queue
		this.items.push(req);
		// prioritize 
		this.prioritize();
	},
	peek:function(){
		// top of queue
		return this.items[0];
	},
	item:function(pos){

		return this.items[pos];
	},
	remove:function(req){
		for(var i=0;i<this.items.length;i++){
			if(req==this.items[i]){
				this.items.splice(i,1);
				//splice(i,n) : removes n items from index i
				return true; // if removal was successful
			}
		}
		return false;
	},
	prioritize:function(){
		return this.items.sort(this.compare);
	},
	compare:function(req1,req2){
		return req1.priority-req2.priority;
	},
}