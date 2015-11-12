'use strict';

const concat = require('broccoli-concat');

module.exports = concat('node_modules', {
  inputFiles: [
    'history/umd/History.js',
    'lodash/index.js',
    'react/dist/react.js',
    'react-dom/dist/react-dom.js',
    'react-router/umd/ReactRouter.js',
    'requirejs/require.js'
  ],
  outputFile: '/dependencies.js'
});
