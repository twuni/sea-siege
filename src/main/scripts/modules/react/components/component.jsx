import I18n from '../../i18n';

class Component extends React.Component {

  static get className() {
    return 'component';
  }

  static get contextTypes() {
    return React.Component.contextTypes;
  }

  static get propTypes() {
    return React.Component.propTypes;
  }

  static get defaultProps() {
    return React.Component.defaultProps;
  }

  static withContextTypes(contextTypes) {
    return _.merge({}, this.contextTypes, contextTypes);
  }

  static withPropTypes(propTypes) {
    return _.merge({}, this.propTypes, propTypes);
  }

  static withDefaultProps(defaultProps) {
    return _.merge({}, this.defaultProps, defaultProps);
  }

  get classNames() {
    return _.compact([this.constructor.className, this.className, this.props.className]).join(' ');
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.shouldComponentLoad(nextProps)) {
      let promise = this.load(nextProps);
      if(promise) {
        promise.then((collection) => {
          this.setState({collection: collection});
        });
      }
    }
  }

  load(nextProps) {
    return undefined;
  }

  shouldComponentLoad(nextProps) {
    return true;
  }

  render() {
    return <span className={this.classNames}/>
  }

  t(key, ...props) {
    return I18n.translate(key, props);
  }

}

export default Component;
