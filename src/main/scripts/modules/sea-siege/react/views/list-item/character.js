import ListItemView from '../../components/list-item-view';

import React from 'react';

const {string} = React.PropTypes;

class CharacterListItemView extends ListItemView {

  static get propTypes() {
    return ListItemView.withPropTypes({
      gameId: string
    });
  }

  get url() {
    let model = this.model;
    let props = this.props;
    return `/games/${props.gameId}/servers/${model.serverId}/characters/${model.id}`;
  }

}

export default CharacterListItemView;
