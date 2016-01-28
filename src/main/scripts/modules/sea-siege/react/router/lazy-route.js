const lazyComponent = function(path) {
  return function(location, callback) {
    require([
      `sea-siege/react/routes/${path}`
    ], function(Component) {
      callback(null, Component);
    });
  };
};

class LazyRoute {

  constructor(path, component, {index, children} = {}) {
    this.path = path;
    this.getComponent = component && lazyComponent(component) || undefined;
    this.indexRoute = index && {
      getComponent: lazyComponent(index)
    } || undefined;
    this.childRoutes = children;
  }

}

export default LazyRoute;
