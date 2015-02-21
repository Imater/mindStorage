'use strict';
var async, element, jsGitDb;

async = require('async');


element = {
  id: 1,
  title: 'test title',
  text: 'ok',
  tags: [1, 2, 3, 4]
};

jsGitDb = new jsGitDb({
  url: new jsGitDb.WebsocketClient('ws://localhost:9898/testDbSocket'),
  storage: new jsGitDb.AutoLocalStorage('testDb')
});

async.series([
  function(cb) {
    jsGitDb.on("ready", function(err){
      cb(err);
    });
  },
  function(cb) {
    jsGitDb.set(element, function(err, id){
      cb(err, id);
    });
  },
  function(id, cb) {
    jsGitDb.get(id, function(err, element){
      cb(err, element);
    });
  }
], function(err, result) {
  if (!err){
    return console.info('demo done', result);
  }
});
