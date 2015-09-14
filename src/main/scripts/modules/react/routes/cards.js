import Route from '../components/route';

class CardsRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <header>
        <h3>{this.t('cards')}</h3>
      </header>
      {this.renderChildRoute()}
      <footer/>
    </section>
  }

}

export default CardsRoute;
