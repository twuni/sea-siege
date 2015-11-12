'use strict';

const concat = require('broccoli-concat');

module.exports = concat('node_modules', {
  inputFiles: [
    'mocha/mocha.css'
  ],
  outputFile: '/dependencies.css'
});
