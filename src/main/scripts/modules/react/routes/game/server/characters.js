import Route from '../../../components/route';

import Header from '../../../components/header';

class GameServerCharactersRoute extends Route {

  render() {
    return <div className={this.classNames}>
      <Header title={this.t('characters')}/>
    </div>
  }

}

export default GameServerCharactersRoute;
