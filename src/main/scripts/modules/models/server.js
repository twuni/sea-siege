import Model from '../model';

import Game from './game';

class Server extends Model {

  static get attributes() {
    return ['id', 'displayName', 'gameId'];
  }

  get game() {
    return Game.find({
      id: this.gameId
    });
  }

}

export default Server;
