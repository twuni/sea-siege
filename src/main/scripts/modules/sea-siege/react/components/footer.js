import Component from './component';

class Footer extends Component {

  render() {
    return <footer className={this.classNames}>
      {this.props.children}
    </footer>
  }

}

export default Footer;
