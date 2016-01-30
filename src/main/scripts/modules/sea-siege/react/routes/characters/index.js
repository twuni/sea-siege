import CollectionRoute from '../../components/collection-route';

import CharacterModel from '../../../models/character';
import CharacterView from '../../views/list-item/character';

class GameServerCharactersIndexRoute extends CollectionRoute {

  static get modelClass() {
    return CharacterModel;
  }

  static get viewClass() {
    return CharacterView;
  }

}

export default GameServerCharactersIndexRoute;
