import Component from '../../components/component';

import Icon from '../../components/icon';

class ManaCost extends Component {

  static get className() {
    return 'mana-cost-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      red: React.PropTypes.number,
      blue: React.PropTypes.number,
      black: React.PropTypes.number,
      white: React.PropTypes.number,
      green: React.PropTypes.number,
      any: React.PropTypes.number
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
