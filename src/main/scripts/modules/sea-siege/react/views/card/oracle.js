import React from 'react';

import Component from '../../components/component';

const {element, oneOfType, string} = React.PropTypes;

class Oracle extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      description: oneOfType([
        string,
        element
      ]),
      quote: string,
      author: string
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

export default Oracle;
