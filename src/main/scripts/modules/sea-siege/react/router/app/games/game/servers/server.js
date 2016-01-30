import {ModelRoute} from '../../../../lazy-route';

import Characters from './server/characters';
import Guilds from './server/guilds';

export default new ModelRoute('server', {
  children: [
    Characters,
    Guilds
  ]
});
