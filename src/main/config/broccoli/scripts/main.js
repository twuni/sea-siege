'use strict';

const babel = require('broccoli-babel-transpiler');
const concat = require('broccoli-concat');

let main = 'src/main/scripts';

main = concat(main, {
  inputFiles: [
    'main.js'
  ],
  outputFile: '/main.js'
});

main = babel(main, {
  nonStandard: true,
  stage: 0
});

module.exports = main;
