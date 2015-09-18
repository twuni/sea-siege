import Component from './component';

class View extends Component {

  static get className() {
    return _.kebabCase(this.name);
  }

  static get propTypes() {
    return Component.withPropTypes({
      model: React.PropTypes.object
    });
  }

  get model() {
    return this.props.model || this.props;
  }

}

_.merge(View, {
  withPropTypes: Component.withPropTypes,
  withContextTypes: Component.withContextTypes,
  withDefaultProps: Component.withDefaultProps
});

export default View;
