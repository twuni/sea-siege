import View from '../../components/view';
import IconLink from '../../components/icon-link';

class GameListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    let params = {
      gameId: model.id
    };

    return <li className={this.classNames}>
      <label>{model.displayName}</label>
      <IconLink to='game.servers' params={params} name='server'/>
      <IconLink to='game.players' params={params} name='users'/>
    </li>

  }

}

export default GameListItemView;
