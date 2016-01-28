'use strict';

const babel = require('broccoli-babel-transpiler');
const concat = require('broccoli-concat');
const funnel = require('broccoli-funnel');

let main = 'src/main/scripts';

main = funnel(main, {
  include: ['main.js']
});

main = babel(main, {
  nonStandard: true,
  stage: 0
});

module.exports = main;
