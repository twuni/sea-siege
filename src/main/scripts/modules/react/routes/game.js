import ModelRoute from '../components/model-route';

import ModelHeader from '../components/model-header';

import GameModel from '../../models/game';

class GameRoute extends ModelRoute {

  static get modelClass() {
    return GameModel;
  }

  static get viewClass() {
    return ModelHeader;
  }

}

export default GameRoute;
