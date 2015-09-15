import Route from '../components/route';

import Header from '../components/header';

class GamesRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <Header title={this.t('games')}/>
      {this.renderChildRoute()}
      <footer/>
    </section>
  }

}

export default GamesRoute;
