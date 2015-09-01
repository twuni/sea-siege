const concat = require('broccoli-concat');

var tree;

tree = 'node_modules';

tree = concat(tree, {
  inputFiles: [
    'font-awesome/css/font-awesome.css'
  ],
  outputFile: '/dependencies.css'
});

module.exports = tree;
