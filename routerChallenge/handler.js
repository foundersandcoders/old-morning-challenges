
module.exports = function articleReturn(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('hello world');
};












// function handler(request, response){
//   var path = url.parse(req.url).pathname;
//   var match = router.match(path);
//   match.fn(req, res, match);
// }
//
// module.exports = handler;
