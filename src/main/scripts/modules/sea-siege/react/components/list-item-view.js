import React from 'react';
import _ from 'lodash';

import View from './view';

import Link from './link';

class ListItemView extends View {

  static get className() {
    return `${super.className} list-item-view`;
  }

  get displayName() {
    const {model} = this;
    return model.displayName || model.title;
  }

  renderActions() {
    return <span/>
  }

  render() {
    const {classNames, displayName, url} = this;
    return <li className={classNames}>
      <Link to={url}>{displayName}</Link>
      {this.renderActions()}
    </li>
  }

}

_.merge(ListItemView, {
  withPropTypes: View.withPropTypes,
  withContextTypes: View.withContextTypes,
  withDefaultProps: View.withDefaultProps
});


export default ListItemView;
