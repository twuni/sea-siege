import LazyRoute from '../../../lazy-route';

import Server from './servers/server';

export default new LazyRoute('servers', 'game/servers', {
  index: 'game/servers/index',
  children: [Server]
});
