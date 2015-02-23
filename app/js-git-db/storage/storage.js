//universal interface for all storages
module.exports = Storage = (function(){
  function Storage(theStorage){
    this.theStorage = theStorage;
  }
  Storage.prototype.set = function(){
    this.theStorage.set.apply(this.theStorage, arguments);
  };
  Storage.prototype.get = function(){
    this.theStorage.get.apply(this.theStorage, arguments);
  };
  Storage.prototype.remove = function(){
    this.theStorage.remove.apply(this.theStorage, arguments);
  };
  Storage.prototype.clearAll = function(){
    this.theStorage.clearAll.apply(this.theStorage, arguments);
  };
  return Storage;
})();
