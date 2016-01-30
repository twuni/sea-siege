import React from 'react';

import View from '../components/view';

import Link from '../components/link';

class ServerView extends View {

  get charactersUrl() {
    return `${this.url}/characters`;
  }

  get guildsUrl() {
    return `${this.url}/guilds`;
  }

  get url() {
    const {model} = this;
    const {gameId, id} = model;
    return `/games/${gameId}/servers/${id}`;
  }

  render() {
    const {classNames, charactersUrl, guildsUrl} = this;
    return <div className={classNames}>
      <Link to={guildsUrl} label='guilds'/>
      <Link to={charactersUrl} label='characters'/>
    </div>
  }

}

export default ServerView;
