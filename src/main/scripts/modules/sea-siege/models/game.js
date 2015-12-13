import Model from '../model';

import Server from './server';

class Game extends Model {

  static get attributes() {
    return [
      'id',
      'displayName',
      'logoUrl'
    ];
  }

  get servers() {
    return Server.find({
      gameId: this.id
    });
  }

}

export default Game;
