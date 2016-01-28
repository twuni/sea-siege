import LazyRoute from '../../../../../lazy-route';

import Character from './characters/character';

export default new LazyRoute('characters', 'game/server/characters', {
  index: 'game/server/characters/index',
  children: [Character]
});
