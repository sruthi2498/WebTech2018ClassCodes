http = require('http');
url = require('url');
static_file = require('node-static');
file = new static_file.Server();

get = require('./get.js');
post = require('./post.js');
cookie = require('./cookie.js');


var handler = function(req,res)
{
	console.log(req.url);
	if(url.parse(req.url).pathname == "/get.php")
	{
		get.serve(req,res);
	}
	else if(url.parse(req.url).pathname == "/cookie.php")
	{
		cookie.serve(req,res);
	}
	else if(url.parse(req.url).pathname == "/post.php")
	{
		post.serve(req,res);
	}
	else
	{
		file.serve(req,res);
	}
}
server = http.createServer(handler);
server.listen(1234);
console.log("server running at localhost:1234");
