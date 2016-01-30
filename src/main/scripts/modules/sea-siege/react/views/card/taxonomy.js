import React from 'react';

import Component from '../../components/component';

import EditionIcon from './edition-icon';

const {string} = React.PropTypes;

class Taxonomy extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      mainType: string.isRequired,
      secondaryType: string,
      rarity: string.isRequired,
      edition: string.isRequired
    });
  }

  get edition() {
    return this.props.edition;
  }

  get rarity() {
    return this.props.rarity;
  }

  get type() {
    const {props} = this;
    const {mainType, secondaryType} = props;
    if(secondaryType) {
      return `${mainType} – ${secondaryType}`;
    }
    return mainType;
  }

  render() {
    const {classNames, edition, rarity, type} = this;
    return <section className={classNames}>
      <span className='type'>{type}</span>
      <aside className={rarity}>
        <EditionIcon edition={edition}/>
      </aside>
    </section>
  }

}

export default Taxonomy;
