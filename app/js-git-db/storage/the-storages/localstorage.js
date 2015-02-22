module.exports = LocalStorage = (function(){
  function LocalStorage(){
    if(typeof localStorage.setItem != 'function'){
      console.info("error: localStorage not supported");
    }
    if(typeof JSON.stringify != 'function'){
      console.info("error: JSON not supported");
    }
    this.storage = localStorage;
  }
  LocalStorage.prototype.set = function(id, object, cb){
    if(typeof object == 'object') {
      objectString = JSON.stringify(object);
    }
    try {
      this.storage.setItem(id, objectString);
    } catch (e) {
      cb(e);
    }
    cb(null);
  }

  LocalStorage.prototype.get = function(id, cb){
    var item;
    if(typeof object == 'object') {
    }
    try {
      objectString = this.storage.getItem(id);
      item = JSON.parse(objectString);
    } catch (e) {
      cb(e);
    }
    cb(null, item);
  }

  LocalStorage.prototype.clearAll = function(cb){
    try {
      this.storage.clear();
    } catch(e) {
      cb(e);
    }
    cb(null);
  }

  return LocalStorage;
})();
