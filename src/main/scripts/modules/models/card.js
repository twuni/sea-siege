import Model from '../model';

class Card extends Model {

  static get attributes() {
    return ['id', 'title', 'mainType', 'secondaryType', 'cost', 'rarity', 'edition', 'serial', 'language', 'oracle', 'power', 'toughness', 'artwork', 'artist'];
  }

}

export default Card;
