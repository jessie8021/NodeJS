var http = require('http');
var favicon = require('serve-favicon');
var finalhandler = require('finalhandler');
var path = require('path');

var _favicon = favicon(path.join('../public_html', 'images', 'favicon.ico'));

var server = http.createServer(function onRequest (req, res) {
  var done = finalhandler(req, res);

  _favicon(req, res, function onNext (err) {
    if (err) return done(err);

    // continue to process the request here, etc.

    res.statusCode = 200  ;
    res.end('Hello World\n');
  })
});

server.listen(3000);