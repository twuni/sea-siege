import Component from '../core/component';

class CardFooter extends Component {

  renderPowerAndToughness() {
    if(this.props.power) {
      if(this.props.toughness) {
        return <span className='creature-stats'>
          <span className='power'>{this.props.power}</span>
          <span className='toughness'>{this.props.toughness}</span>
        </span>;
      }
    }
    return undefined;
  }

  render() {
    return <footer className={this.classNames}>
      <span>{this.props.artist}</span>
      {this.renderPowerAndToughness()}
    </footer>;
  }

}

Component.mergeWith(CardFooter, {
  className: 'card-footer-component',
  propTypes: Component.withPropTypes({
    artist: React.PropTypes.string.isRequired,
    power: React.PropTypes.string,
    toughness: React.PropTypes.string
  })
});

export default CardFooter;
