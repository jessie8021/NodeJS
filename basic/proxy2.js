var connect = require('connect');
var http = require('http');
var crossroads = require('crossroads');
var httpProxy = require('http-proxy');
var favicon = require('serve-favicon');
var path = require('path');
var serveStatic = require('serve-static');


var proxy;
var app = connect()
  .use(favicon(path.join('../public_html', 'images', 'favicon.ico')))
  .use(serveStatic('../public_html', {'index' : 'example1.html'}));


proxy = httpProxy.createProxyServer({});

http.createServer(function (req, res) {
  // dynamic file server
  if(req.url.match(/^\/node\//)) {
    proxy.web(req, res, {target : 'http://localhost:8000'});

  // static file server
  } else {
    proxy.web(req, res, {target: 'http://localhost:8124'});
  }
}).listen(9000);

crossroads.addRoute('/node/:id:', function (id) {
  console.log('accessed node ' + id);
});

http.createServer(function (req, res) {
  crossroads.parse(req.url);
  res.end('that\'s all!');
}).listen(8000);

http.createServer(app).listen(8124);
