
module.exports = fnNode = function(options, args){
  self = this;
  var nodeFn = function(options){
        return fnNode(options, args);
  };
  if(args.know.length>0){
    args.to.push(options);
  } else {
    args.from.push(options);
  }
  this.know = function(opt){
    args.know.push(opt);
    this.node = nodeFn;
    return this;
  };
  this.node = nodeFn;
  this.save = function(callback){
    callback(null, args);
  }
  return this;
};
