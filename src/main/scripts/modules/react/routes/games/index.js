import CollectionRoute from '../../components/collection-route';

import GameModel from '../../../models/game'
import GameView from '../../views/list-item/game'

class GamesIndexRoute extends CollectionRoute {

  static get modelClass() {
    return GameModel;
  }

  static get viewClass() {
    return GameView;
  }

}

export default GamesIndexRoute;
