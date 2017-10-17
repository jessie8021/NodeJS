/**
 * Created by kimhyemi on 2017. 9. 19..
 */
// http module load
var http = require('http');
// standard POSIX functions
var fs = require('fs');

// Create Http Server
http.createServer(function(req, res){
  // Open helloworld.js
  fs.readFile('helloworld.js', 'utf-8', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (err)
      res.write('Could not find or open file for reading\n');
    else
      // if no error, write JS file to client
      res.write(data);
    res.end();
  });
}).listen(8124, function(){ console.log('bound to port 8124'); });

console.log('Server running on 8124/');