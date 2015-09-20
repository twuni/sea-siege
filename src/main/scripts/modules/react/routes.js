import App from './routes/app';

import Cards from './routes/cards';
import CardsIndex from './routes/cards/index';

import Card from './routes/card';
import CardView from './routes/card/view';

import Games from './routes/games';
import GamesIndex from './routes/games/index';

import Game from './routes/game';

import GameServers from './routes/game/servers';
import GameServersIndex from './routes/game/servers/index';

import GameServer from './routes/game/server';

import GameServerCharacters from './routes/game/server/characters';
import GameServerGuilds from './routes/game/server/guilds';

let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;

export default <Route path='/' component={App}>
  <Route path='cards' component={Cards}>
    <IndexRoute component={CardsIndex}/>
    <Route path=':cardId' component={Card}>
      <IndexRoute component={CardView}/>
    </Route>
  </Route>
  <Route path='games' component={Games}>
    <IndexRoute component={GamesIndex}/>
    <Route path=':gameId' component={Game}>
      <Route path='servers' component={GameServers}>
        <IndexRoute component={GameServersIndex}/>
        <Route path=':serverId' component={GameServer}>
          <Route path='guilds' component={GameServerGuilds}/>
          <Route path='characters' component={GameServerCharacters}/>
        </Route>
      </Route>
    </Route>
  </Route>
</Route>
