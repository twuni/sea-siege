import Component from './component';

import Header from './header';

const {object} = React.PropTypes;

class ModelHeader extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      model: object.isRequired
    });
  }

  get model() {
    return (this.state && this.state.model) || (this.props && this.props.model) || {};
  }

  render() {
    let title = this.model.displayName;
    if(title) {
      return <Header title={title}/>
    }
    return <header/>
  }

}

export default ModelHeader;
