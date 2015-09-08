import Route from './route';

import Card from './card';
import Icon from './icon';
import IconStack from './icon-stack';

class Main extends Route {

  static get className() {
    return 'main-route';
  }

  get sample() {
    return {
      title: "Devin Canterberry",
      mainType: 'Creature',
      secondaryType: 'Human',
      cost: {
        blue: 2,
        green: 1,
        any: 4
      },
      rarity: 'uncommon',
      edition: 'TWU',
      serial: 1,
      language: 'en',
      oracle: <p>Devin Canterberry cannot be countered.</p>,
      power: '2',
      toughness: '1',
      artwork: 'https://twun.io/sea-siege/card/sample-artwork.jpg',
      artist: 'Devin Canterberry'
    };
  }

  render() {
    return <div className={this.classNames}>
      <Card {...this.sample}/>
    </div>
  }

}

export default Main;
