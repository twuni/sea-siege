'use strict';

const merge = require('broccoli-merge-trees');

const main = require('./main/config/broccoli');
const test = require('./test/config/broccoli');

module.exports = merge([
  main,
  test
]);
