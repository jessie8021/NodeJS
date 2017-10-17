/**
 * Created by kimhyemi on 2017. 10. 17..
 */
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo) {
  console.log("Message : " + msg + " from " + rinfo.address + " : " + rinfo.port);
});

// If port is not specified or is 0, the operating system will attempt to listen on all addresses.
server.bind(8124);