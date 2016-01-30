import React from 'react';
import _ from 'lodash';

import Component from './component';

import Footer from './footer';
import Header from './header';
import Link from './link';

const {array, object} = React.PropTypes;

class Route extends Component {

  static get className() {
    return `${super.className} route`;
  }

  static get contextTypes() {
    return Component.withContextTypes({
      history: object.isRequired,
      location: object.isRequired
    });
  }

  static get propTypes() {
    return Component.withPropTypes({
      history: object.isRequired,
      location: object.isRequired,
      params: object.isRequired,
      route: object.isRequired,
      routeParams: object.isRequired,
      routes: array.isRequired
    });
  }

  get breadcrumb() {
    const {title, url} = this;
    if(url && title) {
      return <Link key={url} to={url} label={title}/>
    }
    return undefined;
  }

  get criteria() {
    return _.merge({}, this.params, this.query);
  }

  get location() {
    return (this.props && this.props.location) || {};
  }

  get params() {
    return (this.props && this.props.params) || {};
  }

  get query() {
    return this.location.query;
  }

  get title() {
    const className = this.constructor.name;
    return className.replace(/^(.+)Route$/, '$1');
  }

  get url() {
    return undefined;
  }

  renderContent() {
    return this.props.children;
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
