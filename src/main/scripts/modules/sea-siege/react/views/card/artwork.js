import React from 'react';

import Component from '../../components/component';

const {string} = React.PropTypes;

class Artwork extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      url: string.isRequired
    });
  }

  render() {
    return <img className={this.classNames} src={this.props.url}/>
  }

}

export default Artwork;
