import Component from './component';

import Link from './link';
import Route from './route';

class Breadcrumbs extends Component {

  static get contextTypes() {
    return Route.contextTypes;
  }

  get router() {
    return this.context.router;
  }

  get routes() {
    return this.router.routes;
  }

  renderBreadcrumb(route) {
    let name = route.name;
    let label = route.handler.breadcrumb || name;
    return <Link key={name} to={name} label={label}/>
  }

  render() {
    return <span className={this.classNames}>
      {this.routes.map(this.renderBreadcrumb)}
    </span>
  }

}

export default Breadcrumbs;
