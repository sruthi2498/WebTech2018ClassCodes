var http = require('http');
var static = require('node-static');
var file = new static.Server();

http.createServer(function (req, res) {
	file.serve(req, res);
}).listen(1234);

console.log("server running at localhost:1234");
