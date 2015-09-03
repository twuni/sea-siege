import Component from '../core/component';

class CardHeader extends Component {
  render() {
    return <header className={this.classNames}>
      <h1>{this.props.title}</h1>
      <aside>{this.props.cost}</aside>
    </header>
  }
}

Component.mergeWith(CardHeader, {
  className: 'card-header-component',
  propTypes: Component.withPropTypes({
    title: React.PropTypes.string.isRequired,
    cost: React.PropTypes.object
  })
});

export default CardHeader;
