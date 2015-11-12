'use strict';

const merge = require('broccoli-merge-trees');
const dependencies = require('./static/dependencies');

module.exports = merge([
  dependencies,
  'src/test/static'
]);
