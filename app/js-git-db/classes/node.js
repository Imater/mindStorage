module.exports = Node = (function(){
  var id = 0;
  _default = {
    labels: []
  }

  function Node(labels){
    this._node = {};
    _.assign(this._node, _default);
    this._node.labels = labels;
    this._node._id = id++;
  }

  Node.prototype.getId = function(){
    return this._node._id;
  };

  Node.prototype.createMemento = function(cb){
    var cb = cb || function(){};
    var mementoString = JSON.stringify(this._node);
    cb(null, mementoString);
  };

  Node.prototype.restoreMemento = function(mementoString, cb){
    var cb = cb || function(){};
    try {
      var memento = JSON.parse(mementoString);
    } catch(e) {
      cb(e);
    }
    _.assign(this._node, memento);
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
