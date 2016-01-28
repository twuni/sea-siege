import React from 'react';
import _ from 'lodash';

import Component from '../../components/component';

import Icon from '../../components/icon';

const {number} = React.PropTypes;

class ManaCost extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      red: number,
      blue: number,
      black: number,
      white: number,
      green: number,
      any: number
    });
  }

  static get defaultProps() {
    return Component.withDefaultProps({
      red: 0,
      blue: 0,
      black: 0,
      white: 0,
      green: 0,
      any: 0
    });
  }

  renderEachManaType() {
    return _.compact(_.map(['red', 'blue', 'black', 'white', 'green', 'any'], (manaType) => {
      let cost = this.props[manaType];
      if(cost == 0) {
        return undefined;
      }
      if(cost == -1) {
        cost = '*';
      }
      if(manaType !== 'any') {
        return _.times(cost, function(n) {
          return <span key={`${manaType}-${n}`} className={manaType}/>
        });
      }
      return <span key={manaType} className={manaType}>{cost}</span>
    }));
  }

  render() {
    return <span className={this.classNames}>{this.renderEachManaType()}</span>
  }

}

export default ManaCost;
