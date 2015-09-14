import ModelRoute from '../../components/model-route';

import GameModel from '../../../models/game';
import GameView from '../../views/game';

class GameViewRoute extends ModelRoute {

  static get modelClass() {
    return GameModel;
  }

  static get viewClass() {
    return GameView;
  }

}

export default GameViewRoute;
