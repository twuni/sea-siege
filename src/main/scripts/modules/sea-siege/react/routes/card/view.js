import ModelRoute from '../../components/model-route';

import CardModel from '../../../models/card';
import CardView from '../../views/card';

class CardViewRoute extends ModelRoute {

  static get modelClass() {
    return CardModel;
  }

  static get viewClass() {
    return CardView;
  }

  renderHeader() {
    return undefined;
  }

  renderFooter() {
    return undefined;
  }

}

export default CardViewRoute;
