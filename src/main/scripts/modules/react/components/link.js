import Component from './component';

const {func, object, string} = React.PropTypes;

class Link extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      to: string.isRequired,
      label: string,
      onClick: func,
      params: object,
      query: object
    });
  }

  render() {
    let props = _.omit(this.props, 'label');
    let label = this.props.label || this.props.to;
    if(_.isEmpty(this.props.children)) {
      return <ReactRouter.Link {...props} className={this.classNames} activeClassName='active'>{this.t(label)}</ReactRouter.Link>
    }
    return <ReactRouter.Link {...props} className={this.classNames} activeClassName='active'>{this.props.children}</ReactRouter.Link>
  }

}

export default Link;
