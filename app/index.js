'use strict';

var JsGitDb = (function(){
  function JsGitDb(name, surname){
    this.name = name;
    this.surname = surname;
  }
  JsGitDb.prototype.sayName = function(){
    return this.name;
  };
  JsGitDb.prototype.saySurname = function(){
    return this.surname;
  };
  return JsGitDb;
})();

window.JsGitDb = JsGitDb;
