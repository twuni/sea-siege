import I18n from '../../i18n';

class Component extends React.Component {

  static get className() {
    return `${_.kebabCase(this.name)} component`;
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

  static withContextTypes(...contextTypes) {
    return _.merge.apply(_, [{}, this.contextTypes].concat(contextTypes));
  }

  static withPropTypes(...propTypes) {
    return _.merge.apply(_, [{}, this.propTypes].concat(propTypes));
  }

  static withDefaultProps(...defaultProps) {
    return _.merge.apply(_, [{}, this.defaultProps].concat(defaultProps));
  }

  get classNames() {
    return _.uniq(_.compact([this.constructor.className, this.props.className])).join(' ');
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.shouldComponentLoad(nextProps)) {
      let promise = this.load(nextProps);
      if(promise) {
        promise.then((result) => {
          if(_.isArray(result)) {
            this.setState({collection: result});
          } else {
            this.setState({model: result});
          }
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
