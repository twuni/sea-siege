import Component from './component';

const {bool, oneOf, string} = React.PropTypes;

class Icon extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      name: string.isRequired,
      animation: oneOf(['spin', 'pulse']),
      rotation: oneOf([90, 180, 270]),
      translation: oneOf(['flip-horizontal', 'flip-vertical']),
      scale: oneOf(['lg', '2x', '3x', '4x', '5x']),
      invert: bool,
      stackScale: oneOf(['1x', '2x'])
    });
  }

  get fontAwesomeClassNames() {
    let classNames = ['fa', `fa-${this.props.name}`];
    if(this.props.animation) {
      classNames.push(`fa-${this.props.animation}`);
    }
    if(this.props.scale) {
      classNames.push(`fa-${this.props.scale}`);
    }
    if(this.props.rotation) {
      classNames.push(`fa-rotate-${this.props.rotation}`);
    }
    if(this.props.translation) {
      classNames.push(`fa-${this.props.translation}`);
    }
    if(this.props.invert) {
      classNames.push('fa-inverse');
    }
    if(this.props.stackScale) {
      classNames.push(`fa-stack-${this.props.stackScale}`);
    }
    return classNames.join(' ');
  }

  render() {
    return <i className={`${this.classNames} ${this.fontAwesomeClassNames}`}/>
  }
}

export default Icon;
