import Component from '../component';

import EditionIcon from './edition-icon';

class CardTaxonomy extends Component {

  static get className() {
    return 'card-taxonomy-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      mainType: React.PropTypes.string.isRequired,
      secondaryType: React.PropTypes.string,
      rarity: React.PropTypes.string.isRequired,
      edition: React.PropTypes.string.isRequired
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

export default CardTaxonomy;
