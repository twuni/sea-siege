import View from '../../../components/view';

import IconLink from '../../../components/icon-link';
import Link from '../../../components/link';

class ServerListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    let params = {
      gameId: model.gameId,
      serverId: model.id
    };

    return <li className={this.classNames}>
      <Link to='game.server.guilds' params={params}>{model.displayName}</Link>
      <IconLink to='game.server.guilds' params={params} name='tag'/>
      <IconLink to='game.server.characters' params={params} name='user'/>
    </li>

  }

}

export default ServerListItemView;
