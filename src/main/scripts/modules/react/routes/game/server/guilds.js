import Route from '../../../components/route';

import Header from '../../../components/header';

class GameServerGuildsRoute extends Route {

  render() {
    return <div className={this.classNames}>
      <Header title={this.t('guilds')}/>
    </div>
  }

}

export default GameServerGuildsRoute;
