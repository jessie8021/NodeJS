var fs = require('fs');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var etag = require('etag');

function favicon(path, options) {
  var options = options || {};
  var path = path || __dirname + '/../public/favicon.ico';
  var maxAge = options.maxAge || 86400000;
  var icon;

  return function favicon(req, res, next) {
    if('/favicon.ico' == req.url) {
      if(icon) {
        res.writeHead(200, icon.headers);
        res.end(icon.body);
      } else {
        fs.readFile(path, function (err, buf) {
          if(err) return next(err);
          icon = {
            headers: {
              'Content-Type' : 'image/x-icon',
              'Content-Length' : buf.length,
              'ETag' : etag(buf),
              'Cache-Control' : 'public, max-age=' + (maxAge / 1000)
            },
            body : buf
          };
          res.writeHead(200, icon.headers);
          res.end(icon.body);
        });
      }
    } else {
      next();
    }
  };
};

var app = connect()
  .use(favicon('../public_html/images/favicon.ico'))
  .use(serveStatic('../public_html', {index : 'example1.html'}));

http.createServer(app).listen(3000);