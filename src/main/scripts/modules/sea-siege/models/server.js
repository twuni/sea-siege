import Model from '../model';

import Character from './character';
import Game from './game';
import Guild from './guild';

class Server extends Model {

  static get attributes() {
    return ['id', 'displayName', 'gameId'];
  }

  get characters() {
    return Character.find({
      serverId: this.id
    });
  }

  get game() {
    return Game.uniq({
      id: this.gameId
    });
  }

  get guilds() {
    return Guild.find({
      serverId: this.id
    });
  }

}

export default Server;
