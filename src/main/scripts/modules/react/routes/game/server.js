import ModelRoute from '../../components/model-route';

import ServerModel from '../../../models/server';

class GameServerRoute extends ModelRoute {

  static get modelClass() {
    return ServerModel;
  }

}

export default GameServerRoute;
