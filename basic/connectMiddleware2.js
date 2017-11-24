var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('../public_html', {'index': 'example1.html'});
var server = http.createServer(function (req, res) {
  serve(req, res, finalhandler);
});

server.listen(3000);