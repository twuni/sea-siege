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
    const {classNames, props} = this;
    const {children, label} = props;
    const linkProps = _.omit(props, 'label');
    if(_.isEmpty(children)) {
      return <Link {...linkProps} className={classNames} activeClassName='active'>{this.t(label)}</Link>
    }
    return <Link {...linkProps} className={classNames} activeClassName='active'>{children}</Link>
  }

}

export default LinkComponent;
