import React from 'react';
import _ from 'lodash';

import Component from './component';

import Link from './link';
import Icon from './icon';

class IconLink extends Component {

  static get propTypes() {
    return Component.withPropTypes(Icon.propTypes, Link.propTypes);
  }

  render() {

    const linkProps = _.omit(this.props, 'name');

    return <Link {...linkProps}>
      <Icon name={this.props.name}/>
    </Link>

  }

}

export default IconLink;
