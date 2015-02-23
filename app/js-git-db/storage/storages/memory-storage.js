module.exports = MemoryStorage = (function(){
  function MemoryStorage(tableName){
    if(typeof JSON.stringify != 'function'){
      console.info("error: JSON not supported");
    }
    this.storage = {};
    this.tableName = tableName;
  }
  MemoryStorage.prototype.set = function(id, object, cb){
    var cb = cb || function(){}
    if(typeof object == 'object') {
      objectString = JSON.stringify(object);
    }
    try {
      this.storage[id] = objectString;
    } catch (e) {
      cb(e);
    }
    cb(null);
  }

  MemoryStorage.prototype.get = function(id, cb){
    var cb = cb || function(){}
    var item;
    if(typeof object == 'object') {
    }
    try {
      objectString = this.storage[id];
      if(this.storage[id]) {
        item = JSON.parse(objectString);
      } else {
        item = null;
      }
    } catch (e) {
      cb(e);
    }
    cb(null, item);
  }

  MemoryStorage.prototype.clearAll = function(cb){
    var cb = cb || function(){}
    try {
      var i = Object.keys(this.storage).length;
      this.storage = {};
    } catch(e) {
      cb(e);
    }
    cb(null, { removed: i });
  }

  return MemoryStorage;
})();
