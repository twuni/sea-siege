'use strict';

const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');

const dependency = function(sourceFile, targetFile) {
  return concat('node_modules', {
    inputFiles: [sourceFile],
    outputFile: '/' + targetFile
  });
};

module.exports = merge([
  dependency('lodash/index.js', 'lodash.js'),
  dependency('react/dist/react.js', 'react.js'),
  dependency('react-dom/dist/react-dom.js', 'react-dom.js'),
  dependency('react-router/umd/ReactRouter.js', 'react-router.js'),
  dependency('requirejs/require.js', 'require.js')
]);
