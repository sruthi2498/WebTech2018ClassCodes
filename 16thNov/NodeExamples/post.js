var util = require('util');


//For Handling the POST requests
function initPOST(req, pre, cb) 
{
	pre._POST = {};
	var body = '';
	
	//"on" is for event handling.
	// "HTTP body" is delivered in chunks (POST requests)
	// The event is "data" for one more chunk delivered to Node.js
	req.on('data', function(chunk) 
		{
		body += chunk;
		if (body.length > 1e6) {
			req.connection.destroy();
		}
	});
	
	//Event "end" means all chunks have arrived and we can process now
	req.on('end', function() 
	{
		var pairs = body.split('&');
		for (var p=0; p < pairs.length; ++p) {
			var pair = pairs[p].split('=');
			pre._POST[pair[0]] = pair[1];
		}
		cb();
	});
}

//To output html to browser
function page(req, res, pre, cb) {
	console.log(pre._POST);
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	for(i in pre._POST)
	{
		res.write("<h3>" + i + "=>" + pre._POST[i] + "</h3>");
	}
	
	res.end('post.js\n'+util.inspect(pre));
}

exports.serve = function(req,res)
{
	var pre = {};
	initPOST(req, pre, function() {
			page(req, res, pre, function() {
		});
	});
}