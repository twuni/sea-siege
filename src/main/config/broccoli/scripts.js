const babel = require('broccoli-babel-transpiler');
const cjsx = require('broccoli-cjsx');
const coffee = require('broccoli-coffee');
const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');
const uglify = require('broccoli-uglify-js');
const dependencies = require('./scripts/dependencies');
const modules = require('./scripts/modules');
const pkg = require('../../../../package.json');

var tree;

tree = 'src/main/scripts';

tree = concat(tree, {
  inputFiles: ['main.cjsx'],
  outputFile: '/main.cjsx'
});

tree = cjsx(tree);
tree = coffee(tree, {bare: true});
tree = babel(tree, {
  modules: 'amd'
});
tree = merge([dependencies, modules, tree]);

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
