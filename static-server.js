var Hapi   = require('hapi');
var server = new Hapi.Server();
server.register(require('inert'), function () {
  server.connection({ port: 8000 });
  server.route( {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: '.', redirectToSlash: true, listing: true }
    }
  });
  server.start(function() { console.log('Visit: http://localhost:'+server.info.port) });
});
