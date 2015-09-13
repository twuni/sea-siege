import Component from '../../components/component';

class Artwork extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      url: React.PropTypes.string.isRequired
    });
  }

  render() {
    return <img className={this.classNames} src={this.props.url}/>
  }

}

export default Artwork;
