import Model from '../model';

class Game extends Model {

  static get attributes() {
    return ['id', 'displayName', 'logoUrl'];
  }

}

export default Game;
