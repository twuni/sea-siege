const babel = require('broccoli-babel-transpiler');
const cjsx = require('broccoli-cjsx');
const coffee = require('broccoli-coffee');
const concat = require('broccoli-concat');
const pkg = require('../../../../../package.json');

var tree;

tree = 'src/main/scripts/modules';

tree = cjsx(tree);
tree = coffee(tree, {bare: true});
tree = babel(tree, {
  browserPolyfill: true,
  stage: 0,
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
