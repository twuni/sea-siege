import View from '../../components/view';

import IconLink from '../../components/icon-link';
import Link from '../../components/link';

class GameListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    let params = {
      gameId: model.id
    };

    return <li className={this.classNames}>
      <Link to='game.servers' params={params}>{model.displayName}</Link>
      <IconLink to='game.servers' params={params} name='cube'/>
    </li>

  }

}

export default GameListItemView;
