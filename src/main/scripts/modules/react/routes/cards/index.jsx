import CollectionRoute from '../../components/collection-route';

import CardModel from '../../../models/card';
import CardView from '../../views/card';

class CardsIndexRoute extends CollectionRoute {

  static get className() {
    return 'cards-index-route';
  }

  static get modelClass() {
    return CardModel;
  }

  static get viewClass() {
    return CardView;
  }

}

export default CardsIndexRoute;
