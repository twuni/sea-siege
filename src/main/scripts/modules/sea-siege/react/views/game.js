import React from 'react';

import View from '../components/view';
import Link from '../components/link';

class GameView extends View {

  get serversUrl() {
    return `${this.url}/servers`;
  }

  renderTitle() {
    const {model} = this;
    const {logoUrl, displayName} = model;
    if(logoUrl) {
      return <img src={logoUrl} alt={displayName} title={displayName}/>
    }
    return displayName;
  }

  render() {
    const {classNames, serversUrl} = this;
    return <section className={classNames}>
      <header>
        <h3>{this.renderTitle()}</h3>
      </header>
      <footer>
        <Link to={serversUrl} label='servers'/>
      </footer>
    </section>
  }

}

export default GameView;
