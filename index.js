'use strict';
global._ = require('underscore');

//load deps
_.extend(global, {
  'ROOT'    : __dirname,
  'blessed' : require('blessed'),
  'fs'      : require('fs'),
  'events'  : require('events')
});

//load structure
_.extend(global, {
  'screen'  : blessed.screen(),
  'Model'   : require('./lib/model'),
  'models'  : require('./models/')(),
  'views'   : require('./views/')()
});

//load view
_.extend(global, {
  'curView' : new views.Main()
});

screen.key(['C-c'], function(ch, key) {
  return process.exit(0);
});
