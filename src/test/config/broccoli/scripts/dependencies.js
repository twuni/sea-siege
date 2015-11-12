'use strict';

const concat = require('broccoli-concat');
const wrap = require('broccoli-wrap');

let tree = 'node_modules';

tree = concat(tree, {
  inputFiles: [
    'mocha/mocha.js',
    'chai/chai.js',
    'chai-as-promised/lib/chai-as-promised.js'
  ],
  outputFile: '/dependencies.js'
});

tree = wrap(tree, {
  wrapper: [
    '["define", "require"].forEach(function(x){window["_"+x]=window[x];window[x]=undefined;});',
    '["define", "require"].forEach(function(x){window[x]=window["_"+x];window["_"+x]=undefined;});'
  ]
});

module.exports = tree;
