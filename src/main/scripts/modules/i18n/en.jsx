let s = function(value) {
  return function() {
    return value;
  };
}

export default {
  common: s('Common'),
  uncommon: s('Uncommon'),
  rare: s('Rare'),
  mythic: s('Mythic')
};
