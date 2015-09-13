import Component from './component';

class View extends Component {

  static get className() {
    return _.kebabCase(this.name);
  }

}

_.merge(View, {
  withPropTypes: Component.withPropTypes,
  withContextTypes: Component.withContextTypes,
  withDefaultProps: Component.withDefaultProps
});


export default View;
