import App from './routes/app';
import AppIndex from './routes/app/index';

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
import GameServerCharactersIndex from './routes/game/server/characters/index';

import GameServerCharacter from './routes/game/server/character';

import GameServerGuilds from './routes/game/server/guilds';
import GameServerGuildsIndex from './routes/game/server/guilds/index';

import GameServerGuild from './routes/game/server/guild';

let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;

export default <Route path='/' component={App}>
  <IndexRoute component={AppIndex}/>
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
          <Route path='guilds' component={GameServerGuilds}>
            <IndexRoute component={GameServerGuildsIndex}/>
            <Route path=':guildId' component={GameServerGuild}/>
          </Route>
          <Route path='characters' component={GameServerCharacters}>
            <IndexRoute component={GameServerCharactersIndex}/>
            <Route path=':characterId' component={GameServerCharacter}/>
          </Route>
        </Route>
      </Route>
    </Route>
  </Route>
</Route>
