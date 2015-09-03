class Component extends React.Component {

  get classNames() {
    return _.compact([this.constructor.className, this.className, this.props.className]).join(' ');
  }

  render() {
    return <span className={this.classNames}/>;
  }

}

_.merge(Component, {
  className: 'component',
  contextTypes: React.Component.contextTypes,
  propTypes: React.Component.propTypes,
  defaultProps: React.Component.defaultProps,
  mergeWith: function(Child, options) {
    return _.merge(Child, {
      contextTypes: this.contextTypes,
      propTypes: this.propTypes,
      defaultProps: this.defaultProps,
      withContextTypes: this.withContextTypes,
      withPropTypes: this.withPropTypes,
      withDefaultProps: this.withDefaultProps,
      mergeWith: this.mergeWith
    }, options);
  },
  withContextTypes: function(contextTypes) {
    return _.merge({}, this.contextTypes, contextTypes);
  },
  withPropTypes: function(propTypes) {
    return _.merge({}, this.propTypes, propTypes);
  },
  withDefaultProps: function(defaultProps) {
    return _.merge({}, this.defaultProps, defaultProps);
  }
});

export default Component;
