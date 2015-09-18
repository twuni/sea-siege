import ModelRoute from '../components/model-route';

import GameModel from '../../models/game';

class GameRoute extends ModelRoute {

  static get modelClass() {
    return GameModel;
  }

}

export default GameRoute;
