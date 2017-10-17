/**
 * Created by kimhyemi on 2017. 10. 17..
 */
// create server and callback function
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  var query = require('url').parse(req.url).query;
  console.log(query);
  var file = require('querystring').parse(query).file;

  // contents header
  res.writeHead(200, {'Context-Type':'text/plain'});

  // increase global, write to client
  for(var i = 0; i < 100; i++) {
    res.write(i + '\n');
  }

  // open and read in file contents
  var data = fs.readFileSync(file, 'utf8');
  res.write(data);
  res.end();
}).listen('/tmp/node-server-sock');
