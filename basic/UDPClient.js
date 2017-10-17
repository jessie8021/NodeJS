/**
 * Created by kimhyemi on 2017. 10. 17..
 */
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

// prepare for input from terminal(buffer data)
process.stdin.resume();

process.stdin.on('data', function(data){
  // convert buffer data to string
  console.log(data.toString('utf8'));
  client.send(data, 0, data.length, 8124, 'localhost', function(err, bytes) {
    if(err) {
      console.log('error: ' + err);
    } else {
      console.log('successful');
    }
  })
})
