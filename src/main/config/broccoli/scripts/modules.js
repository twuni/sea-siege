'use strict';

const babel = require('broccoli-babel-transpiler');
const concat = require('broccoli-concat');
const pkg = require('../../../../../package.json');

var tree;

tree = 'src/main/scripts/modules';

tree = babel(tree, {
  modules: 'amd',
  moduleIds: true,
  nonStandard: true,
  stage: 0
});

tree = concat(tree, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/modules.js'
});

module.exports = tree;
