import Component from './component';

class Icon extends Component {

  static get className() {
    return 'icon-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      name: React.PropTypes.string.isRequired,
      animation: React.PropTypes.oneOf(['spin', 'pulse']),
      rotation: React.PropTypes.oneOf([90, 180, 270]),
      translation: React.PropTypes.oneOf(['flip-horizontal', 'flip-vertical']),
      scale: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
      invert: React.PropTypes.bool,
      stackScale: React.PropTypes.oneOf(['1x', '2x'])
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
