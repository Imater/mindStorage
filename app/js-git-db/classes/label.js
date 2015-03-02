module.exports = Label = (function(){
  var id = 0;
  _default = {
    labels: []
  }

  function Label(labels){
    this._label = {};
    _.assign(this._label, _default);
    this._label.labels = labels;
    this._label._id = id++;
  }

  Label.prototype.getId = function(){
    return this._label._id;
  };

  Label.prototype.createMemento = function(cb){
    var cb = cb || function(){};
    var mementoString = JSON.stringify(this._label);
    cb(null, mementoString);
  };

  Label.prototype.restoreMemento = function(mementoString, cb){
    var cb = cb || function(){};
    try {
      var memento = JSON.parse(mementoString);
    } catch(e) {
      cb(e);
    }
    _.assign(this._label, memento);
    cb(null, this);
  };

  Label.restoreMemento = function(mementoString, cb){
    var cb = cb || function(){};
    var newLabel = new Label();
    newLabel.restoreMemento(mementoString, function(err, newLabel){
      cb(null, newLabel);
    });
  };

  return Label;
})();
