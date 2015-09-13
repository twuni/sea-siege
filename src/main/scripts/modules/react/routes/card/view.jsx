import Route from '../../components/route';

class CardViewRoute extends Route {

  render() {
    return <div className={this.classNames}>
      This is a good card.
    </div>
  }

}

export default CardViewRoute;
