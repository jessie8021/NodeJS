/**
 * Created by kimhyemi on 2017. 10. 17..
 */
var dns = require('dns');
var url = require('url');
var queryString = require('querystring');

dns.lookup('burningbird.net', function (err, ip) {
  if (err) throw err;
  console.log(ip);
});
dns.reverse('173.255.206.103', function (err, domains) {
  domains.forEach(function (domain) {
    console.log(domain);
  })
});

var urlObj = url.parse('http://examples.burningbird.net:8124/?file=main');

/*
 Url {
 protocol: 'http:',
 slashes: true,
 auth: null,
 host: 'examples.burningbird.net:8124',
 port: '8124',
 hostname: 'examples.burningbird.net',
 hash: null,
 search: '?file=main',
 query: 'file=main',
 pathname: '/',
 path: '/?file=main',
 href: 'http://examples.burningbird.net:8124/?file=main' }
 */
console.log(urlObj);

// results -> file=main
console.log(urlObj.query);

// results -> http://examples.burningbird.net:8124/?file=main
console.log(url.format(urlObj));

// results ->  main
console.log(queryString.parse(urlObj.query).file);

// results -> { file: [ 'main', 'secondary' ], type: 'html' }
console.log(queryString.parse('file=main&file=secondary&type=html'));

// results -> file=main&file=secondary&type=html
console.log(queryString.stringify({ file: [ 'main', 'secondary' ], type: 'html' }));