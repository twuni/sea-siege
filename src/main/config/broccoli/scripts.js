const babel = require('broccoli-babel-transpiler');
const react = require('broccoli-react');
const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');
const uglify = require('broccoli-uglify-js');
const dependencies = require('./scripts/dependencies');
const modules = require('./scripts/modules');
const pkg = require('../../../../package.json');

var tree;

tree = 'src/main/scripts';

tree = concat(tree, {
  inputFiles: ['main.jsx'],
  outputFile: '/main.jsx'
});

tree = react(tree, {transform: {harmony: true}});
tree = babel(tree);
tree = merge([dependencies, modules, tree]);

tree = concat(tree, {
  inputFiles: [
    'dependencies.js',
    'modules.js',
    'main.js'
  ],
  outputFile: '/' + pkg.name + '.js'
});

//tree = uglify(tree);

module.exports = tree;
