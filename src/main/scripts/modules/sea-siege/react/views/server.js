import React from 'react';

import View from '../components/view';

import Link from '../components/link';

class ServerView extends View {

  get url() {
    let model = this.model;
    return `/games/${model.gameId}/servers/${model.id}`;
  }

  render() {
    return <div className={this.classNames}>
      <Link to={`${this.url}/guilds`} label='guilds'/>
      <Link to={`${this.url}/characters`} label='characters'/>
    </div>
  }

}

export default ServerView;
