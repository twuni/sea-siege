strings =
  guild_network: -> 'The Guild Network'

# Card Rarity
_.merge strings,
  common: -> 'Common'
  uncommon: -> 'Uncommon'
  rare: -> 'Rare'
  mythic: -> 'Mythic'

# Models
_.merge strings,
  cards: -> 'Cards'
  games: -> 'Games'
  servers: -> 'Servers'
  players: -> 'Players'
  guilds: -> 'Guilds'
  characters: -> 'Characters'

`export default strings`
