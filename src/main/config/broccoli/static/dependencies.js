'use strict';

const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

const fontAwesome = funnel('node_modules/font-awesome', {
  include: [
    'fonts/fontawesome-webfont.eot',
    'fonts/fontawesome-webfont.svg',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff',
    'fonts/fontawesome-webfont.woff2',
    'fonts/FontAwesome.otf'
  ]
});

module.exports = merge([
  fontAwesome
]);
