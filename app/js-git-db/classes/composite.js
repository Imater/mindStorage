module.exports = Composite = (function (){

  function Composite(){
    this._childs = {};
  }

  Composite.prototype.set = function(node){
    this._childs[node.getId()] = node;
  }

  Composite.prototype.remove = function(node){
    delete this._childs[node.getId()];
  }

  return Composite;
})();
