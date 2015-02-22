module.exports = Storage = (function(){
  function Storage(theStorage){
    this.theStorage = theStorage;
  }

  Storage.prototype.set = this.theStorage.set;
  Storage.prototype.get = this.theStorage.get;
  Storage.prototype.remove = this.theStorage.remove;

})();
