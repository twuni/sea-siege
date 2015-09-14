import Component from '../../components/component';

import ManaCost from './mana-cost';

class Header extends Component {

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

export default Header;
