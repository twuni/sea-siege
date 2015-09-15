import Component from './component';

import Header from './header';

const {object} = React.PropTypes;

class ModelHeader extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      model: object.isRequired
    });
  }

  render() {
    let model = this.props.model;
    let title = model.displayName;
    if(title) {
      return <Header title={model.displayName}/>
    }
    return <header/>
  }

}

export default ModelHeader;
