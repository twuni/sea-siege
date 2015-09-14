const babel = require('broccoli-babel-transpiler');
const coffee = require('broccoli-coffee');
const concat = require('broccoli-concat');
const pkg = require('../../../../../package.json');

var tree;

tree = 'src/main/scripts/modules';

tree = coffee(tree, {
  bare: true
});

tree = babel(tree, {
  modules: 'amd',
  moduleIds: true,
  moduleRoot: pkg.name
});

tree = concat(tree, {
  inputFiles: ['**/*.js'],
  outputFile: '/modules.js'
});

module.exports = tree;
