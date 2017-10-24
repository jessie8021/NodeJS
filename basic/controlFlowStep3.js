var fs = require('fs'),
    Step = require('step');

try {
  Step(
    function () {
      fs.readFile('../data/data1.txt', 'utf8', this.parallel());
      fs.readFile('../data/data2.txt', 'utf8', this.parallel());
      fs.readFile('../data/data3.txt', 'utf8', this.parallel());
    },
    function (err, data1, data2, data3) {
      if (err) throw err;

      data1 = data1.replace(/somecompay\.com/g, 'burningbird.net');
      data2 = data2.replace(/somecompay\.com/g, 'burningbird.net');
      data3 = data3.replace(/somecompay\.com/g, 'burningbird.net');

      fs.writeFile('../data/data1.txt', data1, 'utf8', this.parallel());
      fs.writeFile('../data/data2.txt', data2, 'utf8', this.parallel());
      fs.writeFile('../data/data3.txt', data3, 'utf8', this.parallel());
    }
  );
} catch (err) {
  console.error(err);
}