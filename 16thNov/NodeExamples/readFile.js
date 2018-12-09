var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

	//Async
	fs.readFile('test1.html', function(err, data1) {

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Async : ");
		res.write(data1);
		res.end();

	});

	//Sync
	// var data2 = fs.readFileSync('test1.html');
	// res.write("Sync : ");
	// res.write(data2);
	// //res.end();
	


}).listen(1234);

console.log("server running at localhost:1234");
