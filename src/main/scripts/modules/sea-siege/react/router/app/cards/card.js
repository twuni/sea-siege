import LazyRoute from '../../lazy-route';

export default new LazyRoute(':cardId', 'card', {
  index: 'card/view'
});
