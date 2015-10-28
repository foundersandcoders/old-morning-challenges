# 20th October Morning Challenge

From Rafe Kennedy

## Build a router

Usage should look like this:

```
var Router = require('yourAwesomeRouteModule');
var router = Router();

router.addRoute('/articles/:title', articleReturn);

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);
  match.fn(req, res, match);
}).listen(1337)
```

The output of ```router.match``` for a successful match should work like this:


```
router.addRoute('/articles/:title', articleReturn);
console.log(router.match('/articles/my-router'));

// {
//   params: {
//     title: 'my-router'
//   },
//   route: '/articles/:title',
//   fn: [Function articleReturn]
// }
```

Extension: allow optional parameters like: ```/not-optional/:optional?/:also-optional?```
