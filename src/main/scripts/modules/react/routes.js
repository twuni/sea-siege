import Index from './routes/index';

import Cards from './routes/cards';
import CardsIndex from './routes/cards/index';

import Card from './routes/card';
import CardView from './routes/card/view';

import Games from './routes/games';
import GamesIndex from './routes/games/index';

import Game from './routes/game';
import GameView from './routes/game/view';

import GameServers from './routes/game/servers';
import GamePlayers from './routes/game/players';

let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;

export default <Route path='/' handler={Index}>
  <Route name='games' path='games' handler={Games}>
    <DefaultRoute name='games.index' handler={GamesIndex}/>
    <Route name='game' path=':gameId' handler={Game}>
      <DefaultRoute name='game.view' handler={GameView}/>
      <Route name='game.servers' path='servers' handler={GameServers}/>
      <Route name='game.players' path='players' handler={GamePlayers}/>
    </Route>
  </Route>
  <Route name='cards' path='cards' handler={Cards}>
    <DefaultRoute name='cards.index' handler={CardsIndex}/>
    <Route name='card' path=':cardId' handler={Card}>
      <DefaultRoute name='card.view' handler={CardView}/>
    </Route>
  </Route>
</Route>
