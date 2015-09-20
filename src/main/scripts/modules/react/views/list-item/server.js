import View from '../../components/view';

import IconLink from '../../components/icon-link';
import Link from '../../components/link';

class ServerListItemView extends View {

  get url() {
    let model = this.model;
    return `/games/${model.gameId}/servers/${model.id}`;
  }

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    return <li className={this.classNames}>
      <Link to={`${this.url}/guilds`}>{model.displayName}</Link>
      <span>
        <IconLink to={`${this.url}/guilds`} name='tag'/>
        <IconLink to={`${this.url}/characters`} name='user'/>
      </span>
    </li>

  }

}

export default ServerListItemView;
