import LazyRoute from '../lazy-route';

import Game from './games/game';

export default new LazyRoute('games', 'games', {
  index: 'games/index',
  children: [Game]
});
