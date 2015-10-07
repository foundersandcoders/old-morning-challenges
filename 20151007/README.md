# MIDDLEWARE

## Setup
Here is a basic setup you can use for this morning's challenge

```js
function makeApp () {
  var middlewareStore = [];

  function app (/* something here? */) {
     // TODO
  }

  app.add = function (fn) {
    // TODO
  }

  return app;
}
```

## Firstup
First, make it so that I can write this code:

```js
var myApp = makeApp();

myApp.add(function (req, res, next) {
  res.write('<h1>Hello!</h1>');
  // ADD SOMETHING HERE
}

// add something here

http.createServer(myApp).listen(3000)
```

When I visit `localhost:3000` I should see two headers, one saying 'Hello!' and one saying 'Goodbye!'

## Nextup
Next, make it so that when I visit the root (`/`) everything is the same as before, but when I visit `/rude`, I get a the two previous messages, plus one saying 'Go away already!'

## And then ...

If you run out of things to do, post in gitter. There are a few extra things we can do.
