var http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    base = '../public_html';

http.createServer(function (req, res) {
  pathname = base + req.url;
  console.log(pathname);
  console.log(__dirname);

  fs.stat(pathname, function (err, stats) {
    if(err) {
      // connect - localhost:8124/example.html
      res.writeHead(404);
      res.write('Bad request 404 \n');
      res.end();
    } else if (stats.isFile()){
      // connect - localhost:8124/example1.html
      var type = mime.getType(pathname);
      res.setHeader('Content-Type', type);
      res.statusCode = 200;

      var file = fs.createReadStream(pathname);
      file.on('open', function () {
        file.pipe(res);
      });
      file.on('error', function (err) {
        console.log(err);
      })
    } else {
      // connect - localhost:8124
      res.writeHead(403);
      res.write('Directory acccess is forbidden');
      res.end();
    }
  });
}).listen(8124);

console.log('Server running at 8124/');