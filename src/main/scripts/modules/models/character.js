import Model from '../model';

import Server from './server';
import Player from './player';

class Character extends Model {

  static get attributes() {
    return ['id', 'displayName', 'playerId', 'serverId'];
  }

  get player() {
    return Player.find({
      id: this.playerId
    });
  }

  get server() {
    return Server.find({
      id: this.serverId
    });
  }

}

export default Character;
