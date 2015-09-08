import Component from './component';

class Route extends Component {

  static get className() {
    return 'route';
  }

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

export default Route;
