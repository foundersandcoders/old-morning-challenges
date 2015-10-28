function route(){
  var routeArray = [];
  var routes = {};
  routes.addRoute = function(path, handler){
    var routeObj = {
      path : path,
      fn : handler
    };
    routeArray.push(routeObj);
    console.log('route array', routeArray);
  };

  routes.match = function(path){
    var matches = routeArray.filter(function(routeObj){
      return routeObj.path === path;
    });
    console.log(matches[0]);
    return matches[0];
  };

  return routes;
}

module.exports = route;



//
// var routes = {
//   '/' : handler.home,
//   '404' : handler.notFound
// };
//
// module.exports = function(request, response){
//   if (routes[request.url]){
//       routes[request.url](request, response);
//   } else {
//     routes[404](request, response);
//   }
// };
