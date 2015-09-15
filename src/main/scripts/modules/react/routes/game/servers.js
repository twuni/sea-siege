import Route from '../../components/route';

import Header from '../../components/header';

class GameServersRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <Header title={this.t('servers')}/>
      {this.renderChildRoute()}
      <footer/>
    </section>
  }

}

export default GameServersRoute;
