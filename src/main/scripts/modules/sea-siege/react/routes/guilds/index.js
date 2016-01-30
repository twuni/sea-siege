import CollectionRoute from '../../components/collection-route';

import GuildModel from '../../../models/guild';
import GuildView from '../../views/list-item/guild';

class GameServerGuildsIndexRoute extends CollectionRoute {

  static get modelClass() {
    return GuildModel;
  }

  static get viewClass() {
    return GuildView;
  }

}

export default GameServerGuildsIndexRoute;
