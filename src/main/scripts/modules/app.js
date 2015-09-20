import routes from './react/routes';

class App {

  renderTo(outlet) {
    if(typeof(outlet) === 'string') {
      outlet = document.getElementById(outlet);
    }
    React.render(<ReactRouter.Router history={History.createHistory()} routes={routes}/>, outlet);
  }

}

export default App;
