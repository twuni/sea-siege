import Component from '../core/component';

class CardOracle extends Component {

  renderQuote() {
    if(this.props.quote) {
      if(this.props.author) {
        return <footer>
          <blockquote>{this.props.quote}</blockquote>
          <author>{this.props.author}</author>
        </footer>;
      }
      return <footer>
        <blockquote>{this.props.quote}</blockquote>
      </footer>;
    }
    return undefined;
  }

  render() {
    return <section className={this.classNames}>
      {this.props.description}
      {this.renderQuote()}
    </section>;
  }

}

Component.mergeWith(CardOracle, {
  className: 'card-oracle-component',
  propTypes: Component.withPropTypes({
    description: React.PropTypes.string,
    quote: React.PropTypes.string,
    author: React.PropTypes.string
  })
});

export default CardOracle;
