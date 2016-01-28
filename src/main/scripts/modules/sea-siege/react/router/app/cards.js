import LazyRoute from '../lazy-route';

import Card from './cards/card';

export default new LazyRoute('cards', 'cards', {
  index: 'cards/index',
  children: [Card]
});
