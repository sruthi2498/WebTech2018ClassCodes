var util = require('util');

function initGET(req, pre, cb) {
	pre._GET = {};
	var urlparts = req.url.split('?');
	if (urlparts.length >= 2) {
		var query = urlparts[urlparts.length-1].split('&');
		for (var p=0; p < query.length; ++p) {
			var pair = query[p].split('=');
			pre._GET[pair[0]] = pair[1];
		}
	}
	cb();
}

//To output html to browser
function page(req, res, pre, cb) {
	console.log(pre._GET);
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	for(i in pre._GET)
	{
		res.write("<h3>" + i + "=>" + pre._GET[i] + "</h3>");
	}
	
	res.end('get.js\n'+util.inspect(pre));
}

exports.serve = function(req,res)
{
	var pre = {};
	initGET(req, pre, function() {
			page(req, res, pre, function() {
		});
	});
}