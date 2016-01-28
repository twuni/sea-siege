import React from 'react';

import View from '../components/view';
import Link from '../components/link';

class GameView extends View {

  renderTitle() {
    let model = this.model;
    if(model.logoUrl) {
      return <img src={model.logoUrl} alt={model.displayName} title={model.displayName}/>
    }
    return model.displayName;
  }

  render() {
    let model = this.model;
    return <section className={this.classNames}>
      <header>
        <h3>{this.renderTitle()}</h3>
      </header>
      <footer>
        <Link to={`${this.url}/servers`} label='servers'/>
      </footer>
    </section>
  }

}

export default GameView;
