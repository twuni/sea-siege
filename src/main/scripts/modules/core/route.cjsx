`import Component from './component'`

class Route extends Component

  @className: 'route'

  @contextTypes: Component.withContextTypes
    router: React.PropTypes.func.isRequired
  @propTypes: Component.propTypes
  @defaultProps: Component.defaultProps

  @withContextTypes: Component.withContextTypes
  @withPropTypes: Component.withPropTypes
  @withDefaultProps: Component.withDefaultProps

`export default Route`
