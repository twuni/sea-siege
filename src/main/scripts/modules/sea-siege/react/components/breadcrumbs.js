import Component from './component';

import Link from './link';
import Route from './route';

const {array} = React.PropTypes;

class Breadcrumbs extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      routes: array.isRequired
    });
  }

  get routes() {
    return this.props.routes;
  }

  renderBreadcrumb(route) {
    // FIXME: Route#breadcrumb is only accessible on an instance of Route.
    // Here, `route.component` only gives us a reference to the class.
    return route.component.breadcrumb;
  }

  render() {
    return <span className={this.classNames}>
      {this.routes.map(this.renderBreadcrumb)}
    </span>
  }

}

export default Breadcrumbs;
