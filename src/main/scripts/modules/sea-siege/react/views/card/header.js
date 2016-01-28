import React from 'react';

import Component from '../../components/component';

import ManaCost from './mana-cost';

const {object, string} = React.PropTypes;

class Header extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      title: string.isRequired,
      cost: object
    });
  }

  render() {
    return <header className={this.classNames}>
      <h1>{this.props.title}</h1>
      <aside>
        <ManaCost {...this.props.cost}/>
      </aside>
    </header>
  }

}

export default Header;
