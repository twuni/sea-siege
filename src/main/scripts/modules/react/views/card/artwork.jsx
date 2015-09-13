import Component from '../../components/component';

class CardArtwork extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      url: React.PropTypes.string.isRequired
    });
  }

  render() {
    return <img className={this.classNames} src={this.props.url}/>
  }

}

export default CardArtwork;
