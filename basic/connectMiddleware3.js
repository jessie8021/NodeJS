// dependency - https://github.com/expressjs/morgan.git 
var finalhandler = require('finalhandler');
var http = require('http');
var morgan = require('morgan');
var fs = require('fs');

var writeStream = fs.createWriteStream('../log/log.txt', {'flag': 'a', 'encoding': 'utf8', 'mode': 0666});

// create "middleware"
var logger = morgan('combined', {format: 'dev', stream: writeStream});

http.createServer(function (req, res) {
  var done = finalhandler(req, res);
  logger(req, res, function (err) {
    if (err) return done(err)

    // respond to request
    // res.setHeader('content-type', 'text/plain')
    // res.end('hello, world!')

    var file = fs.createReadStream('../public_html/example1.html');
    file.on('open', function () {
      file.pipe(res);
    });

    file.on('error', function (err) {
      console.log(err);
    });
  })
}).listen(3000);