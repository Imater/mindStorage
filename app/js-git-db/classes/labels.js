var extend = require("./extend.js");
var Composite = require("./composite.js");

module.exports = Labels = (function (superClass){
  extend(Labels, superClass);

  function Labels(){
    Labels.__super__.constructor.apply(this, arguments);
  }

  Labels.prototype.set = function(){
    Labels.__super__.set.apply(this, arguments);
  }

  Labels.prototype.remove = function(){
    Labels.__super__.remove.apply(this, arguments);
  }

  return Labels;
})(Composite);
