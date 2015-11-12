'use strict';

const babel = require('broccoli-babel-transpiler');
const concat = require('broccoli-concat');
const wrap = require('broccoli-wrap');

let specs = 'src/test/scripts';

specs = concat(specs, {
  inputFiles: [
    '**/*_spec.js'
  ],
  outputFile: '/specs.js'
});

specs = babel(specs, {
  nonStandard: true,
  stage: 0
});

specs = wrap(specs, {
  wrapper: [
    'mocha.setup("bdd");expect=chai.expect;',
    'mocha.run();'
  ]
});

module.exports = specs;
