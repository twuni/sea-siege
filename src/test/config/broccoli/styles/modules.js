'use strict';

const stylus = require('broccoli-stylus');
const nib = require('nib');
const concat = require('broccoli-concat');

let tree = 'src/test/styles';

tree = stylus(tree, {
  use: [
    nib
  ]
});

tree = concat(tree, {
  inputFiles: [
    '**/*.css'
  ],
  outputFile: '/modules.css'
});

module.exports = tree;
