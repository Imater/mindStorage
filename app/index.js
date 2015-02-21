'use strict';

var JsGitDb = (function(){
  function JsGitDb(name){
    this.name = name;
  }
  JsGitDb.prototype.sayName = function(){
    return this.name;
  };
  return JsGitDb;
})();

window.JsGitDb = JsGitDb;
