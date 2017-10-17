/**
 * Created by kimhyemi on 2017. 9. 22..
 */
var http = require('http');
var fs = require('fs');

function on_OpenAndReadFile(filename, res) {
  console.log('opening ' + filename);

  fs.readFile(filename, 'utf8', function(err, data){
    if (err)
      res.write('Could not find or open file for reading\n');
    else
      res.write(data);

    res.end();
  });

}


http.createServer(function(req, res){
  var query = require('url').parse(req.url).query;
  var filename = require('querystring').parse(query).file + '.txt';

  setTimeout(on_OpenAndReadFile, 2000, filename, res);
}).listen(8124);

console.log('Server running on 8124/');