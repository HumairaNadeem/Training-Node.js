
const http = require('http');
const fs=require('fs');

http.createServer(function (req, res) {
	res.write(require('fs').readFileSync( __dirname + "/index.html").toString() );
	res.end();
	}).listen(4000);
