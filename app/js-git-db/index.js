_ = require('lodash');
defaults = require('./defaults');

module.exports = (function(){
  function JsGitDb(options){
    _.assign(this, defaults(), options);
  }
  JsGitDb.prototype.node = require('./fn-node');
  return JsGitDb;
})();
