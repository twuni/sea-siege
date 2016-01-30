import React from 'react';

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

  get classNames() {
    return `${super.classNames} ${this.fontAwesomeClassNames}`;
  }

  get fontAwesomeClassNames() {
    const {props} = this;
    const classNames = ['fa', `fa-${props.name}`];
    if(props.animation) {
      classNames.push(`fa-${props.animation}`);
    }
    if(props.scale) {
      classNames.push(`fa-${props.scale}`);
    }
    if(props.rotation) {
      classNames.push(`fa-rotate-${props.rotation}`);
    }
    if(props.translation) {
      classNames.push(`fa-${props.translation}`);
    }
    if(props.invert) {
      classNames.push('fa-inverse');
    }
    if(props.stackScale) {
      classNames.push(`fa-stack-${props.stackScale}`);
    }
    return classNames.join(' ');
  }

  render() {
    return <i className={this.classNames}/>
  }
}

export default Icon;
