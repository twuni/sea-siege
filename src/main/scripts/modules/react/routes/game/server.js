import ModelRoute from '../../components/model-route';

import ModelHeader from '../../components/model-header';

import ServerModel from '../../../models/server';

class GameServerRoute extends ModelRoute {

  static get modelClass() {
    return ServerModel;
  }

  static get viewClass() {
    return ModelHeader;
  }

}

export default GameServerRoute;
