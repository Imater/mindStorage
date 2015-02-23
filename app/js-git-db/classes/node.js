module.exports = Node = (function(){
  var id = 0;

  function Node(options){
    _.assign(this, options);
    this._id = id++;
  }

  Node.prototype.id = function(){
    return this._id;
  };

  Node.prototype.createMemento = function(cb){
    var cb = cb || function(){};
    var mementoString = JSON.stringify(this);
    cb(null, mementoString);
  };

  Node.prototype.restoreMemento = function(mementoString, cb){
    var cb = cb || function(){};
    try {
      var memento = JSON.parse(mementoString);
    } catch(e) {
      cb(e);
    }
    _.assign(this, memento);
    cb(null, this);
  };

  Node.restoreMemento = function(mementoString, cb){
    var cb = cb || function(){};
    var newNode = new Node();
    newNode.restoreMemento(mementoString, function(err, newNode){
      cb(null, newNode);
    });
  };

  return Node;
})();
