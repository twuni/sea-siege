import CollectionRoute from '../../components/collection-route';

import GameModel from '../../../models/game'
import GameView from '../../views/game'

class GamesIndex extends CollectionRoute {

  get modelClass() {
    return GameModel;
  }

  get viewClass() {
    return GameView;
  }

}

export default GamesIndex;
