import ModelRoute from '../components/model-route';

import GuildModel from '../../models/guild';
import GuildView from '../views/guild';

class GameServerGuildRoute extends ModelRoute {

  static get modelClass() {
    return GuildModel;
  }

  static get viewClass() {
    return GuildView;
  }

}

export default GameServerGuildRoute;
