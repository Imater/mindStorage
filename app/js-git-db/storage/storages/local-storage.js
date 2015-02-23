module.exports = LocalStorage = (function(){
  function LocalStorage(tableName){
    if(typeof localStorage.setItem != 'function'){
      console.info("error: localStorage not supported");
    }
    if(typeof JSON.stringify != 'function'){
      console.info("error: JSON not supported");
    }
    this._key = function(id) {
      return tableName + "::" + id;
    };
    this.tableName = "table" || tableName;
    this.storage = localStorage;
  }


  LocalStorage.prototype.set = function(id, object, cb){
    var cb = cb || function(){}
    if(typeof object == 'object') {
      objectString = JSON.stringify(object);
    }
    try {
      this.storage.setItem(this._key(id), objectString);
    } catch (e) {
      cb(e);
    }
    cb(null);
  }

  LocalStorage.prototype.get = function(id, cb){
    var cb = cb || function(){}
    var item;
    if(typeof object == 'object') {
    }
    try {
      objectString = this.storage.getItem(this._key(id));
      item = JSON.parse(objectString);
    } catch (e) {
      cb(e);
    }
    cb(null, item);
  }

  LocalStorage.prototype.remove = function(id, cb) {
    var cb = cb || function(){}
    try {
      this.storage.removeItem(this._key(id))
    } catch(e) {
      cb(e);
    }
    cb(null);
  }

  LocalStorage.prototype.clearAll = function(cb){
    var cb = cb || function(){}
    try {
      var allKeys = Object.keys(this.storage);
      var self = this;
      var i = 0;
      allKeys.forEach(function(key){
        if(key.indexOf(self._key("")) != -1) {
          var id = key.replace(self._key(''), "");
          self.remove(id);
          i++;
        }
      });
    } catch(e) {
      cb(e);
    }
    cb(null, {removed: i});
  }

  return LocalStorage;
})();
