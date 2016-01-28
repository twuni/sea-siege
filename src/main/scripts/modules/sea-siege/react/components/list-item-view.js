import React from 'react';
import _ from 'lodash';

import View from './view';

import Link from './link';

class ListItemView extends View {

  static get className() {
    return `${super.className} list-item-view`;
  }

  get displayName() {
    let model = this.model;
    return model.displayName || model.title;
  }

  renderActions() {
    return <span/>
  }

  render() {
    return <li className={this.classNames}>
      <Link to={this.url}>{this.displayName}</Link>
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
