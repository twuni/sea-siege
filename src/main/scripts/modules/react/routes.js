import Index from './routes/index';

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
let DefaultRoute = ReactRouter.DefaultRoute;

export default <Route path='/' handler={Index}>
  <Route name='cards' path='cards' handler={Cards}>
    <DefaultRoute name='cards.index' handler={CardsIndex}/>
    <Route name='card' path=':cardId' handler={Card}>
      <DefaultRoute name='card.view' handler={CardView}/>
    </Route>
  </Route>
  <Route name='games' path='games' handler={Games}>
    <DefaultRoute name='games.index' handler={GamesIndex}/>
    <Route name='game' path=':gameId' handler={Game}>
      <Route name='game.servers' path='servers' handler={GameServers}>
        <DefaultRoute name='game.servers.index' handler={GameServersIndex}/>
        <Route name='game.server' path=':serverId' handler={GameServer}>
          <Route name='game.server.guilds' path='guilds' handler={GameServerGuilds}/>
          <Route name='game.server.characters' path='characters' handler={GameServerCharacters}/>
        </Route>
      </Route>
    </Route>
  </Route>
</Route>
