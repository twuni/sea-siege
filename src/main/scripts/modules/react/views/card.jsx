import View from '../components/view';

import Header from './card/header';
import Artwork from './card/artwork';
import Taxonomy from './card/taxonomy';
import Oracle from './card/oracle';
import Footer from './card/footer';

class CardView extends View {

  static get propTypes() {
    return View.withPropTypes({
      model: React.PropTypes.object,
      title: React.PropTypes.string,
      artwork: React.PropTypes.string,
      artist: React.PropTypes.string,
      mainType: React.PropTypes.string,
      secondaryType: React.PropTypes.string,
      cost: React.PropTypes.object,
      rarity: React.PropTypes.string,
      edition: React.PropTypes.string,
      serial: React.PropTypes.number,
      language: React.PropTypes.string,
      power: React.PropTypes.string,
      toughness: React.PropTypes.string,
      oracle: React.PropTypes.element,
      quote: React.PropTypes.string,
      author: React.PropTypes.string
    });
  }

  get model() {
    return this.props.model || this.props;
  }

  render() {
    let model = this.model;
    return <div className={this.classNames}>
      <Header title={model.title} cost={model.cost}/>
      <Artwork url={model.artwork}/>
      <Taxonomy mainType={model.mainType} secondaryType={model.secondaryType} rarity={model.rarity} edition={model.edition}/>
      <Oracle description={model.oracle} quote={model.quote} author={model.author}/>
      <Footer artist={model.artist} power={model.power} toughness={model.toughness}/>
    </div>
  }

}

export default CardView;
