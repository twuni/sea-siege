import Component from './component';

const {string} = React.PropTypes;

class Header extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      title: string.isRequired
    });
  }

  render() {
    return <header className={this.classNames}>
      <h3>{this.props.title}</h3>
      {this.props.children}
    </header>
  }

}

export default Header;
