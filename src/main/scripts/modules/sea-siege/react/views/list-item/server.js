import React from 'react';

import ListItemView from '../../components/list-item-view';

import IconLink from '../../components/icon-link';

class ServerListItemView extends ListItemView {

  get baseUrl() {
    const {model} = this;
    const {gameId, id} = model;
    return `/games/${gameId}/servers/${id}`;
  }

  get charactersUrl() {
    return `${this.baseUrl}/characters`;
  }

  get guildsUrl() {
    return `${this.baseUrl}/guilds`;
  }

  get url() {
    return `${this.baseUrl}/guilds`;
  }

  renderActions() {
    return <span>
      <IconLink to={this.guildsUrl} name='tag'/>
      <IconLink to={this.charactersUrl} name='user'/>
    </span>
  }

}

export default ServerListItemView;
