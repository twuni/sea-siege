import LazyRoute from '../../lazy-route';

import Servers from './game/servers';

export default new LazyRoute(':gameId', 'game', {
  children: [Servers]
});
