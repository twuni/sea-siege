import Model from '../model';

import GuildMembership from './guild-membership';
import Server from './server';

class Guild extends Model {

  static get attributes() {
    return [
      'id',
      'displayName',
      'serverId'
    ];
  }

  get server() {
    return Server.uniq({
      id: this.serverId
    });
  }

  get guildMemberships() {
    return GuildMembership.find({
      guildId: this.id
    });
  }

}

export default Guild;
