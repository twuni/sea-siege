import React from 'react';

import Component from '../../components/component';

const {string} = React.PropTypes;

class Footer extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      artist: string.isRequired,
      power: string,
      toughness: string
    });
  }

  renderPowerAndToughness() {
    if(this.props.power) {
      if(this.props.toughness) {
        return <span className='creature-stats'>
          <span className='power'>{this.props.power}</span>
          <span className='toughness'>{this.props.toughness}</span>
        </span>
      }
    }
    return undefined;
  }

  render() {
    return <footer className={this.classNames}>
      <span className='artist'>{this.props.artist}</span>
      {this.renderPowerAndToughness()}
    </footer>
  }

}

export default Footer;
