import CollectionRoute from '../../components/collection-route';

import ServerModel from '../../../models/server';
import ServerView from '../../views/list-item/server';

class GameServersIndexRoute extends CollectionRoute {

  static get modelClass() {
    return ServerModel;
  }

  static get viewClass() {
    return ServerView;
  }

}

export default GameServersIndexRoute;
