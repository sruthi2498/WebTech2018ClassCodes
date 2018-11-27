var http=require("http");

var dt=require("./myDate");

http.createServer(function(req,res){
	res.writeHead(200,("Content-Type":"text/plain"));
	res.end("Hello World");
	res.write("The date and time : "+dt.myDateTime());
}).listen(1234);

console.log("server running at localhost:1234");

