const merge = require('broccoli-merge-trees');
const dependencies = require('./static/dependencies');

var tree;

tree = 'src/main/static';

tree = merge([dependencies, tree]);

module.exports = tree;
