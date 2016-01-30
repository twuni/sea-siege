import React from 'react';

import Component from './component';

const {string} = React.PropTypes;

class Header extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      title: string
    });
  }

  get title() {
    return this.props.title;
  }

  renderTitle() {
    const {title} = this;
    if(title) {
      return <h3>{title}</h3>
    }
    return undefined;
  }

  render() {
    return <header className={this.classNames}>
      {this.renderTitle()}
      {this.props.children}
    </header>
  }

}

export default Header;
