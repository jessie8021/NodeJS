var fs = require('fs');
var writeStream = fs.createWriteStream('../log/log.txt', {'flags':'a', 'encoding':'utf8', 'mode': 0666});

try{
  fs.readdir('../data/', function (err, files) {
    files.forEach(function (name) {
      fs.stat('../data/' + name, function (err, stats) {
        if (err) throw err;

        if(stats.isFile()){
          fs.readFile('../data/' + name, 'utf8', function (err, data) {
            if(err) throw err;

            var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');

            fs.writeFile('../data/' + name, adjData, function(err) {
              if(err) throw err;

              writeStream.write('changed ' + name + '\n', 'utf8', function (err) {
                if(err) throw err;
              })
            })
          })
        }
      })
    })
  })
}catch(err) {
  console.error(err);
}