import ListItemView from '../../components/list-item-view';

import React from 'react';

const {string} = React.PropTypes;

class GuildListItemView extends ListItemView {

  static get propTypes() {
    return ListItemView.withPropTypes({
      gameId: string
    });
  }

  get url() {
    const {model, props} = this;
    const {gameId} = props;
    const {serverId, id} = model;
    return `/games/${gameId}/servers/${serverId}/guilds/${id}`;
  }

}

export default GuildListItemView;
