var connect = require('connect');
var http = require('http');
var fs = require('fs');
var custom = require('./customHandler');
var path = require('path');
var favicon = require('serve-favicon');

http.createServer(connect()
  .use(favicon(path.join('../public_html', 'images', 'favicon.ico')))
  .use(custom('../public_html', '404 File Not Found', '403 Directory Access Forbidden'))).listen(3000);
