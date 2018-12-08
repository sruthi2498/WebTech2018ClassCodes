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