import Component from './component';

const {object} = React.PropTypes;

class View extends Component {

  static get className() {
    return _.kebabCase(this.name);
  }

  static get propTypes() {
    return Component.withPropTypes({
      model: object.isRequired
    });
  }

  get model() {
    return this.props.model;
  }

  get url() {
    let model = this.model;
    return `/${model.constructor.typeKey}/${model.id}`;
  }

}

_.merge(View, {
  withPropTypes: Component.withPropTypes,
  withContextTypes: Component.withContextTypes,
  withDefaultProps: Component.withDefaultProps
});

export default View;
