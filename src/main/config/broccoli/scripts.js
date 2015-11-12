'use strict';

const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');
const uglify = require('broccoli-uglify-js');

const dependencies = require('./scripts/dependencies');
const modules = require('./scripts/modules');
const main = require('./scripts/main');

const pkg = require('../../../../package.json');

let tree = merge([
  dependencies,
  modules,
  main
]);

tree = concat(tree, {
  inputFiles: [
    'dependencies.js',
    'modules.js',
    'main.js'
  ],
  outputFile: '/' + pkg.name + '.js'
});

tree = uglify(tree);

module.exports = tree;
