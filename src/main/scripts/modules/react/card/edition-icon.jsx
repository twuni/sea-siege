import Component from '../component';

import Icon from '../icon';

class EditionIcon extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      edition: React.PropTypes.string.isRequired
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
