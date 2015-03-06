'use strict';
module.exports = function(){
  var options = require('./options.js');
  var ms = new require('./mindStorage.js')(options);
  ms.connect().then(function(){
    ms.set('test');
  });
};
