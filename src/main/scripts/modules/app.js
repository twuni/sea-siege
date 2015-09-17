import routes from './react/routes';

class App {

  renderTo(outlet) {
    if(typeof(outlet) === 'string') {
      outlet = document.getElementById(outlet);
    }
    ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
      return React.render(<Handler/>, outlet);
    });
  }

}

export default App;
