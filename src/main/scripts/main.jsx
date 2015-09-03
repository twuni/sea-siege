require(['sea-siege/main'], function(Main) {

  var reactor, routes;

  reactor = function() {
    return document.getElementById('reactor');
  };

  routes = <ReactRouter.Route handler={Main} path='/'/>;

  ReactRouter.run(routes, function(Handler) {
    return React.render(<Handler/>, reactor());
  });

});
