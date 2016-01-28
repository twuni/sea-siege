import LazyRoute from './lazy-route';

import Cards from './app/cards';
import Games from './app/games';

export default new LazyRoute('/', 'app', {
  index: 'app/index',
  children: [
    Cards,
    Games
  ]
});
