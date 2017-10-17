/**
 * Created by kimhyemi on 2017. 9. 19..
 */
var http = require('http');
var fs = require('fs');

function writeNumbers(res){
  // test global variable
  // var counter = 0;
  counter = 0;

  // increment, write to client
  for (var i = 0; i < 100; i++){
    counter++;
    res.write(counter.toString() + '\n');
  }
}

http.createServer(function(req, res){
  var query = require('url').parse(req.url).query;
  // test global variable
  // var app = require('querystring').parse(query).file + '.txt';
  app = require('querystring').parse(query).file + '.txt';

  res.writeHead(200, {'Content-Type': 'text/plain'});

  writeNumbers(res);

  setTimeout(function(){
    console.log('opening ' + app);

    fs.readFile(app, 'utf-8', function(err, data){
      if(err)
        res.write('Could not find or open file for reading\n');
      else
        res.write(data);

      res.end();
    });
  }, 2000);
}).listen(8124);

console.log('Server running at 8124');

/*
* execute on Browser
*   : localhost:8124/?file=main
*
* output
*   : Server running at 8124/
*   : opening main.txt
*   : opening undefined.txt
* */