import ModelRoute from '../../../components/model-route';

import CharacterModel from '../../../../models/character';
import CharacterView from '../../../views/character';

class GameServerCharacterRoute extends ModelRoute {

  static get modelClass() {
    return CharacterModel;
  }

  static get viewClass() {
    return CharacterView;
  }

}

export default GameServerCharacterRoute;
