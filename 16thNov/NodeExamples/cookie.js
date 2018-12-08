var util = require('util');

//Cookies are present in req.headers.cookie.
function initCOOKIE(req, pre, cb) 
{
	pre._COOKIE = {};
	if (req.headers.cookie) 
	{
		//cookies format---"font=arial;color=red;size=20" 
		var cookies = req.headers.cookie.split(';');
		for (var c=0; c < cookies.length; ++c) 
		{
			var pair = cookies[c].split('=');
			pre._COOKIE[pair[0]] = pair[1];
		}
	}
	cb();
};



//To output html to browser
function page(req, res, pre, cb) {
	console.log(pre._COOKIE);
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	for(i in pre._COOKIE)
	{
		res.write("<h3>" + i + "=>" + pre._COOKIE[i] + "</h3>");
	}
	
	res.end('cookie.js\n'+util.inspect(pre));
}

exports.serve = function(req,res)
{
	var pre = {};
	initCOOKIE(req, pre, function() {
			page(req, res, pre, function() {
		});
	});
}

