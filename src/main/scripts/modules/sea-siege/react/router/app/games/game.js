import {ModelRoute} from '../../lazy-route';

import Servers from './game/servers';

export default new ModelRoute('game', {
  children: [Servers]
});
