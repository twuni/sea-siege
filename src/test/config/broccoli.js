const merge = require('broccoli-merge-trees');

const scripts = require('./broccoli/scripts');
const styles = require('./broccoli/styles');
const statics = require('./broccoli/static');

module.exports = merge([
  statics,
  scripts,
  styles
]);
