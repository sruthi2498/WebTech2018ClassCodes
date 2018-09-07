function NewsItem(title,link){
	this.anchor=document.createElement("a");
	this.anchor.href=link;
	this.anchor.innerHTML=title;

}

function NewsFeed(){
	this.xhr=new XMLHttpRequest();
	this.feed=new Array();
	this.div=document.getElementById("inner");
	//current object gets lost so you need temp
	temp=this;
	//getFeed method is a part of the news feed consructor so you can access it here
	this.getFeed();

	//scroll function
	this.scroll();

	

}


NewsFeed.prototype.getFeed=function()
{
	this.xhr.onreadystatechange=this.showFeed;
	this.xhr.open("GET","getnews.php",true);
	this.xhr.send();

}
NewsFeed.prototype.showFeed=function(){
	if(this.readyState==4 && this.status==200){
		var res=this.responseXML;
		console.log(res);
		//start parsing the documnet. You need access to root elemt
		var root=res.documentElement;
		var items=root.getElementsByTagName("item");
		//all those xml items are now in this array
		for(var i=0;i<5;i++){
			var title=items[i].getElementsByTagName("title")[0].firstChild.nodeValue;
			var link=items[i].getElementsByTagName("link")[0].firstChild.nodeValue;

			//console.log(title+link);

			var ni=new NewsItem(title,link);
			temp.feed[i]=ni;

			temp.div.appendChild(temp.feed[i].anchor);
			temp.div.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		temp.div.style.left=window.innerWidth-5+"px";

	}

}

NewsFeed.prototype.scroll=function()
{
	
	if(temp.div.offsetLeft+temp.div.offsetWidth<2){
		//if it reaches right edge, position on the left side
		temp.div.style.left=window.innerWidth-5+"px";
	}
	else{
		// move the div from left to right
		temp.div.style.left=temp.div.offsetLeft-5+"px";
	}
	//call the scroll fn at regular intervals to move the div
	temp.scrTimer=setTimeout(temp.scroll,50);
}

function init(){
	new NewsFeed();

}