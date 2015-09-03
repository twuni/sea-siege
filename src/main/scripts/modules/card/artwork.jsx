import Component from '../core/component';

class CardArtwork extends Component {

  render() {
    return <img className={this.classNames} src={this.props.url}/>;
  }

}

Component.mergeWith(CardArtwork, {
  className: 'card-artwork-component',
  propTypes: Component.withPropTypes({
    url: React.PropTypes.string.isRequired
  })
});

export default CardArtwork;
