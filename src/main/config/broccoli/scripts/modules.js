const babel = require('broccoli-babel-transpiler');
const react = require('broccoli-react');
const concat = require('broccoli-concat');
const pkg = require('../../../../../package.json');

var tree;

tree = 'src/main/scripts/modules';

tree = react(tree, {
  transform: {
    harmony: true,
    es6module: true
  }
});

tree = babel(tree, {
  moduleIds: true,
  modules: 'amd',
  getModuleId: function(moduleName) {
    moduleName = pkg.name + '/' + moduleName;
    return moduleName.replace(/\/index$/g, '');
  },
  resolveModuleSource: function(source, fileName) {
    var match, path;
    match = fileName.match(/(.+)\/index\.\S+$/i);
    if(match) {
      path = match[1];
      source = source.replace(/^\.\//, path + '/');
      source = source.replace(/^\.{2}\//, '');
    }
    return source;
  }
});

tree = concat(tree, {
  inputFiles: ['**/*.js'],
  outputFile: '/modules.js'
});

module.exports = tree;
