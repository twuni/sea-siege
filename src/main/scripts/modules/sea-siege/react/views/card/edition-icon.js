import React from 'react';

import Component from '../../components/component';

import Icon from '../../components/icon';

const {string} = React.PropTypes;

class EditionIcon extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      edition: string.isRequired
    });
  }

  static get editionIconNames() {
    return {
      'TWU': 'camera-retro'
    };
  }

  get iconName() {
    return this.constructor.editionIconNames[this.props.edition] || 'star';
  }

  render() {
    return <Icon name={this.iconName}/>
  }

}

export default EditionIcon;
