// dependency - https://www.npmjs.com/package/cookie-parser
var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');

var app = connect()
  .use(cookieParser())
  .use(function(req, res, next){
      console.log('traking...');
      console.log(req.cookies);
      next();
    })
  .use(serveStatic('../public_html', {'index' : 'example3.html'}));

http.createServer(app).listen(8124);
console.log('Server listening on port 8124');