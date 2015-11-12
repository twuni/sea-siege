'use strict';

const concat = require('broccoli-concat');

module.exports = concat('node_modules', {
  inputFiles: [
    'font-awesome/css/font-awesome.css'
  ],
  outputFile: '/dependencies.css'
});
