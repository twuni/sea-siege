import LazyRoute from '../../../../lazy-route';

import Characters from './server/characters';
import Guilds from './server/guilds';

export default new LazyRoute(':serverId', 'game/server', {
  children: [
    Characters,
    Guilds
  ]
});
