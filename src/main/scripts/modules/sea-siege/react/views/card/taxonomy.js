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

  getType() {
    var type;
    type = this.props.mainType;
    if(this.props.secondaryType) {
      type += ' – ' + this.props.secondaryType;
    }
    return type;
  }

  render() {
    return <section className={this.classNames}>
      <span className='type'>{this.getType()}</span>
      <aside className={this.props.rarity}>
        <EditionIcon edition={this.props.edition}/>
      </aside>
    </section>
  }

}

export default Taxonomy;
