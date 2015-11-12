'use strict';

const babel = require('broccoli-babel-transpiler');
const concat = require('broccoli-concat');

let helpers = 'src/test/scripts/helpers';

helpers = concat(helpers, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/helpers.js'
});

helpers = babel(helpers, {
  nonStandard: true,
  stage: 0
});

module.exports = helpers;
