var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
  var ur=request.url;
  console.log("url : ",ur);


  var query = url.parse(request.url, true).query;

  response.writeHead(200, {"Content-Type": "text/plain"});
  if (query.name) {
    response.end('Hello ' + query.name + '\n');

  } else {
    response.end("Hello World\n");
  }
}).listen(1234);;

console.log("server running at localhost:1234");

