import Model from '../model';

import Character from './character';

class Player extends Model {

  static get attributes() {
    return ['id', 'displayName'];
  }

  get characters() {
    return Character.find({
      playerId: this.id
    });
  }

}

export default Player;
