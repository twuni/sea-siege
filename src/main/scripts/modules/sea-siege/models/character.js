import Model from '../model';

import GuildMembership from './guild-membership';
import Player from './player';
import Server from './server';

class Character extends Model {

  static get attributes() {
    return [
      'id',
      'displayName',
      'playerId',
      'serverId'
    ];
  }

  get player() {
    return Player.uniq({
      id: this.playerId
    });
  }

  get server() {
    return Server.uniq({
      id: this.serverId
    });
  }

  get guildMemberships() {
    return GuildMembership.find({
      characterId: this.id
    });
  }

}

export default Character;
