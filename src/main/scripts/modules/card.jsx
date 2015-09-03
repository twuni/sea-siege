import Component from './core/component';

import Header from './card/header';
import Artwork from './card/artwork';
import Taxonomy from './card/taxonomy';
import Oracle from './card/oracle';
import Footer from './card/footer';

class Card extends Component {

  render() {
    return <div className={this.classNames}>
      <Header title={this.props.title} cost={this.props.cost}/>
      <Artwork url={this.props.artwork}/>
      <Taxonomy mainType={this.props.mainType} secondaryType={this.props.secondaryType} rarity={this.props.rarity} edition={this.props.edition}/>
      <Oracle description={this.props.oracle} quote={this.props.quote} author={this.props.author}/>
      <Footer artist={this.props.artist} power={this.props.power} toughness={this.props.toughness}/>
    </div>;
  }

}

Component.mergeWith(Card, {
  className: 'card-component',
  propTypes: Component.withPropTypes({
    title: React.PropTypes.string.isRequired,
    artwork: React.PropTypes.string.isRequired,
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
  })
});

export default Card;
