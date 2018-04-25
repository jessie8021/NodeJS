var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

function clearSession(req, res, next) {
  if('/clear' == req.url) {
    req.session = null;
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  } else {
    next();
  }
}

function trackUser(req, res, next) {
  console.log(req.session);
  req.session.ct = req.session.ct | 0;
  req.session.username = req.session.username | req.cookies.username;
  console.log(req.cookies.username + ' request ' + req.session.ct++ + ' resources this session');
  next();
}

var app = connect()
  .use(cookieParser('mumble'))
  .use(cookieSession({name: 'username', keys:['tracking']}))
  .use(clearSession)
  .use(trackUser)
  .use(serveStatic('../public_html', {index : 'example3.html'}));

http.createServer(app).listen(8124);
console.log('Server listening on port 8124');


