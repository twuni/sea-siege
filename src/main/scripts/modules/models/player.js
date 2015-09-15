import Model from '../model';

class Player extends Model {

  static get attributes() {
    return ['id', 'displayName'];
  }

}

export default Player;
