module.exports = Node = (function(){
  var id = 0;

  function Node(options){
    _.assign(this, options);
    this._id = id++;
  }

  Node.prototype.id = function(){
    return this._id;
  };

  return Node;
})();
