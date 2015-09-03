import Component from '../core/component';

class CardTaxonomy extends Component {

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
      <div>{this.getType()}</div>
      <aside>{this.props.rarity}</aside>
    </section>;
  }

}

Component.mergeWith(CardTaxonomy, {
  className: 'card-taxonomy-component',
  propTypes: Component.withPropTypes({
    mainType: React.PropTypes.string.isRequired,
    secondaryType: React.PropTypes.string,
    rarity: React.PropTypes.string.isRequired,
    edition: React.PropTypes.string.isRequired
  })
});

export default CardTaxonomy;
