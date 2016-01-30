import React from 'react';

import Component from './component';

const {oneOf} = React.PropTypes;

class IconStack extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      scale: oneOf(['lg', '2x', '3x', '4x', '5x'])
    });
  }

  get fontAwesomeClassNames() {
    const classNames = ['fa', 'fa-stack'];
    const {scale} = this.props;
    if(scale) {
      classNames.push(`fa-${scale}`);
    }
    return classNames.join(' ');
  }

  render() {
    const {classNames, fontAwesomeClassNames, props} = this;
    return <i className={`${classNames} ${fontAwesomeClassNames}`}>
      {props.children}
    </i>
  }

}

export default IconStack;
