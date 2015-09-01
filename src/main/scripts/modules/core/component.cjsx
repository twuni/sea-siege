class Component extends React.Component

  @className: 'component'

  @contextTypes: React.Component.contextTypes
  @propTypes: React.Component.propTypes
  @defaultProps: React.Component.defaultProps

  @withContextTypes: (contextTypes) -> _.merge({}, @contextTypes, contextTypes)
  @withPropTypes: (propTypes) -> _.merge({}, @propTypes, propTypes)
  @withDefaultProps: (defaultProps) -> _.merge({}, @defaultProps, defaultProps)

  render: ->
    <span/>

`export default Component`
