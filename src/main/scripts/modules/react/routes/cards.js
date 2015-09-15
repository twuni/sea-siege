import Route from '../components/route';

import Header from '../components/header';

class CardsRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <Header title={this.t('cards')}/>
      {this.renderChildRoute()}
      <footer/>
    </section>
  }

}

export default CardsRoute;
