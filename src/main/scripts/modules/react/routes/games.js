import Route from '../components/route';

class GamesRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <header>
        <h3>{this.t('games')}</h3>
      </header>
      {this.renderChildRoute()}
      <footer/>
    </section>
  }

}

export default GamesRoute;
