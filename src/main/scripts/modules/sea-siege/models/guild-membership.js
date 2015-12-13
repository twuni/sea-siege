import Model from '../model';

import Character from './character';
import Guild from './guild';

class GuildMembership extends Model {

  static get attributes() {
    return [
      'id',
      'title',
      'guildId',
      'characterId'
    ];
  }

  get guild() {
    return Guild.uniq({
      id: this.guildId
    });
  }

  get character() {
    return Character.uniq({
      id: this.characterId
    });
  }

}

export default GuildMembership;
