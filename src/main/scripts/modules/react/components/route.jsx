import Component from './component';

class Route extends Component {

  static get contextTypes() {
    return Component.withContextTypes({
      router: React.PropTypes.func.isRequired
    });
  }

  renderChildRoute() {
    return <ReactRouter.RouteHandler/>
  }

  render() {
    return <div className={this.classNames}>
      {this.renderChildRoute()}
    </div>
  }

}

_.merge(Route, {
  withPropTypes: Component.withPropTypes,
  withContextTypes: Component.withContextTypes,
  withDefaultProps: Component.withDefaultProps
});

export default Route;
