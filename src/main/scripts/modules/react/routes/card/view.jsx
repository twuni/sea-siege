import Route from '../../components/route';

class CardViewRoute extends Route {

  static get className() {
    return 'card-view-route';
  }

  render() {
    return <div className={this.classNames}>
      This is a good card.
    </div>
  }

}

export default CardViewRoute;
