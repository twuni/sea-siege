const concat = require('broccoli-concat');

module.exports = concat('node_modules', {
  inputFiles: [
    'lodash/index.js',
    'react/dist/react.js',
    'react-router/umd/ReactRouter.js'
  ],
  outputFile: '/dependencies.js'
});
