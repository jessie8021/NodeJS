/**
 * Created by kimhyemi on 2017. 9. 19..
 */
var http = require('http');

// The url we want, plus the path and options we need
var options = {
  host: 'localhost',
  port: 8124,
  path: '/?file=secondary',
  method: 'GET'
};

var proccessPublicTimeline = function(response){
  // If finished, write data to the file
  console.log('finished request');
};

for(var i = 0; i < 2000; i++){
  // Close the connection after send request
  http.request(options, proccessPublicTimeline).end();
}