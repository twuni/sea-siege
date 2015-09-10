import Component from '../../components/component';

class CardOracle extends Component {

  static get className() {
    return 'card-view-oracle-component';
  }

  static get propTypes() {
    return Component.withPropTypes({
      description: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
      ]),
      quote: React.PropTypes.string,
      author: React.PropTypes.string
    });
  }

  renderQuote() {
    if(this.props.quote) {
      if(this.props.author) {
        return <footer>
          <blockquote>{this.props.quote}</blockquote>
          <author>{this.props.author}</author>
        </footer>
      }
      return <footer>
        <blockquote>{this.props.quote}</blockquote>
      </footer>
    }
    return undefined;
  }

  render() {
    return <section className={this.classNames}>
      <span dangerouslySetInnerHTML={{__html: this.props.description}}/>
      {this.renderQuote()}
    </section>
  }

}

export default CardOracle;
