import LazyRoute from '../../../../../lazy-route';

import Guild from './guilds/guild';

export default new LazyRoute('guilds', 'game/server/guilds', {
  index: 'game/server/guilds/index',
  children: [Guild]
});
