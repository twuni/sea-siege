import View from '../../components/view';

import IconLink from '../../components/icon-link';
import Link from '../../components/link';

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
      <Link to='server.guilds' params={params}>{model.displayName}</Link>
      <span>
        <IconLink to='server.guilds' params={params} name='tag'/>
        <IconLink to='server.characters' params={params} name='user'/>
      </span>
    </li>

  }

}

export default ServerListItemView;
