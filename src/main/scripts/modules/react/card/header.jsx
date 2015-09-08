import Component from '../component';

import ManaCost from './mana-cost';

class CardHeader extends Component {

  static get className() {
    return 'card-header-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      title: React.PropTypes.string.isRequired,
      cost: React.PropTypes.object
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

export default CardHeader;
