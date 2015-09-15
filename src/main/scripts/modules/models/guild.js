import Model from '../model';

import Server from './server';

class Guild extends Model {

  static get attributes() {
    return ['id', 'displayName', 'serverId'];
  }

  get server() {
    return Server.find({
      id: this.serverId
    });
  }

}

export default Guild;
