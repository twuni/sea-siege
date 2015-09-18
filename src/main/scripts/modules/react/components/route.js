import Component from './component';

import Footer from './footer';
import Header from './header';

const {func} = React.PropTypes;

class Route extends Component {

  static get className() {
    return _.kebabCase(this.name);
  }

  static get contextTypes() {
    return Component.withContextTypes({
      router: func.isRequired
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

  get title() {
    return undefined;
  }

  renderChildRoute() {
    return <ReactRouter.RouteHandler/>
  }

  renderContent() {
    return this.renderChildRoute();
  }

  renderFooter() {
    return <Footer/>
  }

  renderHeader() {
    return <Header title={this.title}/>
  }

  render() {
    return <div className={this.classNames}>
      {this.renderHeader()}
      {this.renderContent()}
      {this.renderFooter()}
    </div>
  }

}

_.merge(Route, {
  withPropTypes: Component.withPropTypes,
  withContextTypes: Component.withContextTypes,
  withDefaultProps: Component.withDefaultProps
});

export default Route;
