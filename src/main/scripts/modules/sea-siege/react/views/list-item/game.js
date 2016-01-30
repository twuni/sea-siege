import React from 'react';

import ListItemView from '../../components/list-item-view';

import IconLink from '../../components/icon-link';

class GameListItemView extends ListItemView {

  get url() {
    return `${super.url}/servers`;
  }

  renderActions() {
    const {url} = this;
    return <span>
      <IconLink to={url} name='cube'/>
    </span>
  }

}

export default GameListItemView;
