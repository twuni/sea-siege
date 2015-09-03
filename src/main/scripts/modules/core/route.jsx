import Component from './component';

class Route extends Component {

  render() {
    return <div className={this.classNames}>
      <ReactRouter.RouteHandler/>
    </div>;
  }

}

Component.mergeWith(Route, {
  className: 'route',
  contextTypes: Component.withContextTypes({
    router: React.PropTypes.func.isRequired
  })
});

export default Route;
