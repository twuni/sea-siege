const babel = require('broccoli-babel-transpiler');
const react = require('broccoli-react');
const concat = require('broccoli-concat');
const pkg = require('../../../../../package.json');

var tree;

tree = 'src/main/scripts/modules';

tree = react(tree, {
  transform: {
    harmony: true,
    es6module: true
  }
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
