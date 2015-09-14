import Component from './component';

class Link extends Component {

  static get propTypes() {
    return Component.withPropTypes({
      to: React.PropTypes.string.isRequired,
      label: React.PropTypes.string,
      onClick: React.PropTypes.func,
      params: React.PropTypes.object,
      query: React.PropTypes.object
    });
  }

  render() {
    let props = _.omit(this.props, 'label');
    let label = this.props.label || this.props.to;
    if(_.isEmpty(this.props.children)) {
      return <ReactRouter.Link {...props}>{this.t(label)}</ReactRouter.Link>
    }
    return <ReactRouter.Link {...props}>{this.props.children}</ReactRouter.Link>
  }

}

export default Link;
