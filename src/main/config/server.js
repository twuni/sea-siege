const port = process.env.PORT || 8000;

const catchAll = require('./server/catch-all');
const logger = require('./server/logger');
const statics = require('./server/static');
const express = require('express');

const app = express();

app.use(logger);
app.use(statics);
app.get('*', catchAll);

app.listen(port, function() {
  console.log('%s LISTEN %d', new Date().toISOString(), port);
});
