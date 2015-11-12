'use strict';

const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');

const dependencies = require('./scripts/dependencies');
const helpers = require('./scripts/helpers');
const specs = require('./scripts/specs');

const pkg = require('../../../../package.json');

let tree = merge([
  dependencies,
  helpers,
  specs
]);

tree = concat(tree, {
  inputFiles: [
    'dependencies.js',
    'helpers.js',
    'specs.js'
  ],
  outputFile: '/' + pkg.name + '-test.js'
});

module.exports = tree;
