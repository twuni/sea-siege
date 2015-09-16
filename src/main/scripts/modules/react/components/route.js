import Component from './component';

class Route extends Component {

  static get contextTypes() {
    return Component.withContextTypes({
      router: React.PropTypes.func.isRequired
    });
  }

  get criteria() {
    return _.merge({}, this.params, this.query);
  }

  get params() {
    return (this.props && this.props.params) || {};
  }

  get query() {
    return (this.props && this.props.query) || {};
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
