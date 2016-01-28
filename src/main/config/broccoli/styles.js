'use strict';

const concat = require('broccoli-concat');
const funnel = require('broccoli-funnel');
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

//const clean = require('broccoli-clean-css');
//tree = clean(tree);

tree = funnel(tree, {
  destDir: 'assets/stylesheets'
});

module.exports = tree;
