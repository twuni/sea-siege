import Model from '../model';

class Card extends Model {

  static get url() {
    return '/api/cards.json';
  }

  get url() {
    return `/api/cards/${this.id}.json`;
  }

  constructor(params = {}) {
    super(params);
    _.merge(this, params);
  }

  serialize() {
    return new Promise((resolve, reject) => {
      let serial = {
        "id": this.id,
        "title": this.title,
        "mainType": this.mainType,
        "secondaryType": this.secondaryType,
        "cost": this.cost,
        "rarity": this.rarity,
        "edition": this.edition,
        "serial": this.serial,
        "language": this.language,
        "oracle": this.oracle,
        "power": this.power,
        "toughness": this.toughness,
        "artwork": this.artwork,
        "artist": this.artist
      };
      resolve(serial);
    });
  }

}

export default Card;
