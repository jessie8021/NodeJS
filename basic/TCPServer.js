/**
 * Created by kimhyemi on 2017. 10. 17..
 */
var net = require('net');

var server = net.createServer(function(conn) {
  console.log('connected');

  // when receive data back event
  conn.on('data', function(data) {
    console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
    // conn.write('Repeating: ' + data);
  });

  // when sever closed event
  conn.on('close', function() {
    console.log('client closed connection');
  });
}).listen(8124);

console.log('listening on port 8124');