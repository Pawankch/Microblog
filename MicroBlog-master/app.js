var http = require('http');
var message = require('./message/message');
var BlogRoute = require('./route/blogRoute');

var port = process.env.port || 3000;

var app = http.createServer(function requestListener(req, res) {
  var blogRoute = new BlogRoute({ message: message, req: req, res: res });

  if (blogRoute.isValidRoute()) {
    blogRoute.route();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
  res.end('A Simple Microblog');
});

app.listen(port);

console.log('Listening on http://localhost:' + port);
