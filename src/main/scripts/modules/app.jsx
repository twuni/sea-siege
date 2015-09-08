import Main from './react/main';

class App {

  get routes() {
    return <ReactRouter.Route handler={Main} path='/'/>
  }

  renderTo(outlet) {
    if(typeof(outlet) === 'string') {
      outlet = document.getElementById(outlet);
    }
    ReactRouter.run(this.routes, function(Handler) {
      return React.render(<Handler/>, outlet);
    });
  }

}

export default App;
