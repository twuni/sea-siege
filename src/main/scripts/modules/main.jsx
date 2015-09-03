import Route from './core/route';

import Card from './card';

class Main extends Route {

  get sample() {
    return {
      title: "Devin Canterberry",
      mainType: 'Creature',
      secondaryType: 'Human',
      cost: {
        blue: 1,
        green: 1,
        any: 1
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

Route.mergeWith(Main, {
  className: 'main-route'
});

export default Main;
