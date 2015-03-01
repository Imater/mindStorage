var extend = require("./extend.js");
var Composite = require("./composite.js");

module.exports = Nodes = (function (superClass){
  extend(Nodes, superClass);

  function Nodes(){
    Nodes.__super__.constructor.apply(this, arguments);
  }

  Nodes.prototype.set = function(){
    Nodes.__super__.set.apply(this, arguments);
  }

  Nodes.prototype.remove = function(){
    Nodes.__super__.remove.apply(this, arguments);
  }

  return Nodes;
})(Composite);
