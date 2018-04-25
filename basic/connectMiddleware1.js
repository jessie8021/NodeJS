// dependency - https://github.com/expressjs/serve-favicon.git
var http = require('http');
var connect = require('connect');
var favicon = require('serve-favicon');
// var finalhandler = require('finalhandler');
var path = require('path');
var serveStatic = require('serve-static');

// var _favicon = favicon(path.join('../public_html', 'images', 'favicon.ico'));
var app = connect()
  .use(favicon(path.join('../public_html', 'images', 'favicon.ico')))
  .use(serveStatic('../public_html', {'index' : 'example1.html'}));

// var server = http.createServer(function onRequest (req, res) {
//   var done = finalhandler(req, res);
//
//   _favicon(req, res, function onNext (err) {
//     if (err) return done(err);
//
//     // continue to process the request here, etc.
//
//     res.statusCode = 200  ;
//     res.end('Hello World\n');
//   })
// });

// server.listen(3000);
http.createServer(app).listen(3000);