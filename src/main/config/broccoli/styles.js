const stylus = require('broccoli-stylus');
const nib = require('nib');
const clean = require('broccoli-clean-css');
const concat = require('broccoli-concat');
const dependencies = require('./styles/dependencies');
const merge = require('broccoli-merge-trees');
const pkg = require('../../../../package.json');

var tree;

tree = 'src/main/styles';

tree = stylus(tree, {use: [nib]});

tree = concat(tree, {
  inputFiles: ['**/*.css'],
  outputFile: '/' + pkg.name + '.css'
});

tree = merge([dependencies, tree]);

tree = concat(tree, {
  inputFiles: [
    'dependencies.css',
    pkg.name + '.css'
  ],
  outputFile: '/' + pkg.name + '.css'
});

tree = clean(tree);

module.exports = tree;
