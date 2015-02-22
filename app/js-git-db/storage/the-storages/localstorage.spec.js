'use strict';
var LocalStorage = require('./localstorage');
var async = require('async');

describe('LocalStorage', function(){
  it('exist', function(){
    expect(LocalStorage).toBeDefined();
  });

  it('can set', function(){
    var ls = new LocalStorage();
    var exampleObject = {
      id: 100,
      title: "test",
      tags: [1, 2, 3]
    };
    ls.set("100", exampleObject, function(err){
      expect(err).toBe(null);
    });
  });

  it('can set and then get', function(){
    var ls = new LocalStorage();
    var exampleObject = {
      id: 200,
      title: "test",
      tags: [1, 2, 3]
    };
    ls.set("200", exampleObject, function(error){
      ls.get("200", function(err, item){
        expect(err).toBe(null);
        expect(item.title).toBe('test');
      });
    });
  });

  it('can clear all db', function(done){
    var ls = new LocalStorage();
    var exampleObject = {
      id: 200,
      title: "test",
      tags: [1, 2, 3]
    };
    async.waterfall([
      function(cb){
        ls.set("200", exampleObject, cb);
      },
      function(cb){
        ls.get("200", cb);
      },
      function(result, cb){
        expect(result.title).toBe(exampleObject.title);
        ls.clearAll(cb);
      },
      function(cb){
        ls.get("200", cb);
      }
    ], function(err, result){
      expect(err).toBe(null);
      expect(result).toBe(null);
      done();
    });
  });

  it('can change record in db', function(done){
    var ls = new LocalStorage();
    var exampleObject = {
      id: 200,
      title: "test",
      tags: [1, 2, 3]
    };
    async.waterfall([
      function(cb){
        ls.set("200", exampleObject, cb);
      },
      function(cb){
        ls.get("200", cb);
      },
      function(result, cb){
        expect(result.title).toBe(exampleObject.title);
        ls.clearAll(cb);
      },
      function(cb){
        var exampleObjectChanged = JSON.parse(
          JSON.stringify(exampleObject)
        );
        exampleObjectChanged.title = "title is changed";
        ls.set("200", exampleObjectChanged, cb);
      },
      function(cb){
        ls.get("200", cb);
      }
    ], function(err, result){
      expect(err).toBe(null);
      expect(result.title).toBe("title is changed");
      done();
    });
  });
})
