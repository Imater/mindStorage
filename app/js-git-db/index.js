_ = require('lodash');
defaults = require('./defaults');
fnNode = require('./fn-node')

module.exports = (function(){
  function JsGitDb(options){
    _.assign(this, defaults(), options);
    this._args = {};
  }
  JsGitDb.prototype.node = function(options){
    var args = {
      from: [],
      know: [],
      to: []
    };
    return fnNode(options, args);
  };
  return JsGitDb;
})();
