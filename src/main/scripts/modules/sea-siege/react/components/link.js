import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';

import Component from './component';

const {func, object, string} = React.PropTypes;

class LinkComponent extends Component {

  static get className() {
    return 'link component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      to: string.isRequired,
      label: string,
      onClick: func,
      params: object,
      query: object
    });
  }

  render() {
    let props = _.omit(this.props, 'label');
    let label = this.props.label;
    if(_.isEmpty(this.props.children)) {
      return <Link {...props} className={this.classNames} activeClassName='active'>{this.t(label)}</Link>
    }
    return <Link {...props} className={this.classNames} activeClassName='active'>{this.props.children}</Link>
  }

}

export default LinkComponent;
