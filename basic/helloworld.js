/**
 * Created by kimhyemi on 2017. 9. 19..
 */
// http module load
var http = require('http');

// Create http server
http.createServer(function(req, res){
  // Write contents header
  res.writeHead(200, {'content-type': 'text/plain'});
  // Send signal for finished http after write message
  res.end('Hello, World\n');
}).listen(8124);

console.log('Server running on 8124');

/*
  execute to background: node helloworld.js &
  forced termination
    : ps -ef | grep node
    : kill 1223
 */