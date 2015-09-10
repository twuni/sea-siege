import Component from './component';

class IconStack extends Component {

  static get className() {
    return 'icon-stack-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      scale: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x'])
    });
  }

  get fontAwesomeClassNames() {
    let classNames = ['fa', 'fa-stack'];
    if(this.props.scale) {
      classNames.push(`fa-${this.props.scale}`);
    }
    return classNames.join(' ');
  }

  render() {
    return <i className={`${this.classNames} ${this.fontAwesomeClassNames}`}>
      {this.props.children}
    </i>
  }

}

export default IconStack;
