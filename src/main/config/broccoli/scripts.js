'use strict';

const concat = require('broccoli-concat');
const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

const dependencies = require('./scripts/dependencies');
const modules = require('./scripts/modules');
const main = require('./scripts/main');

const pkg = require('../../../../package.json');

let tree = merge([
  dependencies,
  modules,
  main
]);

//const uglify = require('broccoli-uglify-js');
//tree = uglify(tree);

tree = funnel(tree, {
  destDir: 'assets/scripts'
});

module.exports = tree;
