import React from 'react';

import ListItemView from '../../components/list-item-view';

import IconLink from '../../components/icon-link';

class GameListItemView extends ListItemView {

  get url() {
    return `${super.url}/servers`;
  }

  renderActions() {
    let model = this.model;
    return <span>
      <IconLink to={this.url} name='cube'/>
    </span>
  }

}

export default GameListItemView;
