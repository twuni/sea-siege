import React from 'react';

import ListItemView from '../../components/list-item-view';

import IconLink from '../../components/icon-link';

class ServerListItemView extends ListItemView {

  get baseUrl() {
    let model = this.model;
    return `/games/${model.gameId}/servers/${model.id}`;
  }

  get url() {
    return `${this.baseUrl}/guilds`;
  }

  renderActions() {
    return <span>
      <IconLink to={`${this.baseUrl}/guilds`} name='tag'/>
      <IconLink to={`${this.baseUrl}/characters`} name='user'/>
    </span>
  }

}

export default ServerListItemView;
