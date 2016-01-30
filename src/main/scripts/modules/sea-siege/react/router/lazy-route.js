const lazyComponent = function(path) {
  return function(location, callback) {
    require([
      `sea-siege/react/routes/${path}`
    ], function(Component) {
      callback(null, Component);
    });
  };
};

class Route {

  constructor(path, component, {index, children} = {}) {
    this.path = path;
    this.getComponent = component && lazyComponent(component) || undefined;
    this.indexRoute = index && {
      getComponent: lazyComponent(index)
    } || undefined;
    this.childRoutes = children;
  }

}

class ModelRoute extends Route {

  constructor(modelType, ...args) {
    super(`:${modelType}Id`, modelType, ...args);
  }

}

class CollectionRoute extends Route {

  constructor(modelType, itemComponent) {
    super(modelType, modelType, {
      index: `${modelType}/index`,
      children: [itemComponent]
    });
  }

}

export {ModelRoute, CollectionRoute};
export default Route;
