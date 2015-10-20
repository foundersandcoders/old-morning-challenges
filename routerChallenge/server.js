var http = require('http');
var url = require('url');
var router = require('./router.js')();
// var router = Router();

router.addRoute('/articles', require('./handler.js'));
router.addRoute('/sohil', require('./sohilHandler.js'));



http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);
  match.fn(req, res);
}).listen(1337);










// var http = require('http');
// var Router = require('./router.js');
// var router = Router();
// var port = process.env.PORT || 1337;
// var handler = require('./handler.js');
//
// router.addRoute('/articles/:title', articleReturn);
//
// http.createServer(handler).listen(port);
// console.log('server now listening on port: ', port);
//
//
