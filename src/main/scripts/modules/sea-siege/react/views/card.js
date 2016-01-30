import React from 'react';

import View from '../components/view';

import Header from './card/header';
import Artwork from './card/artwork';
import Taxonomy from './card/taxonomy';
import Oracle from './card/oracle';
import Footer from './card/footer';

class CardView extends View {

  render() {
    const {classNames, model} = this;
    if(!model.id) {
      return <div className={classNames}/>
    }
    return <div className={classNames}>
      <Header title={model.title} cost={model.cost}/>
      <Artwork url={model.artwork}/>
      <Taxonomy mainType={model.mainType} secondaryType={model.secondaryType} rarity={model.rarity} edition={model.edition}/>
      <Oracle description={model.oracle} quote={model.quote} author={model.author}/>
      <Footer artist={model.artist} power={model.power} toughness={model.toughness}/>
    </div>
  }

}

export default CardView;
