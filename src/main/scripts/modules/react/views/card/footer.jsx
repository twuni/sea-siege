import Component from '../../components/component';

class Footer extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      artist: React.PropTypes.string.isRequired,
      power: React.PropTypes.string,
      toughness: React.PropTypes.string
    });
  }

  renderPowerAndToughness() {
    if(this.props.power) {
      if(this.props.toughness) {
        return <span className='creature-stats'>
          <span className='power'>{this.props.power}</span>
          <span className='toughness'>{this.props.toughness}</span>
        </span>
      }
    }
    return undefined;
  }

  render() {
    return <footer className={this.classNames}>
      <span className='artist'>{this.props.artist}</span>
      {this.renderPowerAndToughness()}
    </footer>
  }

}

export default Footer;
