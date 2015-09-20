import Route from '../components/route';

class CardRoute extends Route {

  render() {
    return this.props.children;
  }

}

export default CardRoute;
