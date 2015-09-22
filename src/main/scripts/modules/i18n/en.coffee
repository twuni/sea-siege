strings =
  site_title: -> 'The Guild Network'
  site_introduction: -> 'The Guild Network is a social graph linking characters and guilds together from a diverse set of massively multiplayer online games. Choose a path from the sidebar to get started.'

# Card Rarity
_.merge strings,
  common: -> 'Common'
  uncommon: -> 'Uncommon'
  rare: -> 'Rare'
  mythic: -> 'Mythic'

# Models
_.merge strings,
  cards: -> 'Cards'
  characters: -> 'Characters'
  games: -> 'Games'
  guilds: -> 'Guilds'
  players: -> 'Players'
  servers: -> 'Servers'

`export default strings`
