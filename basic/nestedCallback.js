var fs = require('fs');

try {
  fs.readFile('./apples.txt', 'utf8', function (err, data) {
    if (err) throw err;

    var adjData = data.replace(/[A|a]pple/g, 'Orange');

    fs.writeFile('./oranges.txt', adjData, function (err) {
      if (err) throw  err
    })
  })
} catch (err) {
  console.log(err);
}