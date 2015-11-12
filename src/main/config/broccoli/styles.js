'use strict';

const clean = require('broccoli-clean-css');
const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');

const dependencies = require('./styles/dependencies');
const modules = require('./styles/modules');

const pkg = require('../../../../package.json');

let tree = merge([
  dependencies,
  modules
]);

tree = concat(tree, {
  inputFiles: [
    'dependencies.css',
    'modules.css'
  ],
  outputFile: '/' + pkg.name + '.css'
});

tree = clean(tree);

module.exports = tree;
