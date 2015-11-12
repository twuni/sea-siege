const S = function(text) {
  return function() {
    return text;
  };
};

export default {
  site_title: S('The Guild Network'),
  site_introduction: S('The Guild Network is a social graph linking characters and guilds together from a diverse set of massively multiplayer online games. Choose a path from the sidebar to get started.'),
  common: S('Common'),
  uncommon: S('Uncommon'),
  rare: S('Rare'),
  mythic: S('Mythic'),
  cards: S('Cards'),
  characters: S('Characters'),
  games: S('Games'),
  guilds: S('Guilds'),
  players: S('Players'),
  servers: S('Servers')
};
