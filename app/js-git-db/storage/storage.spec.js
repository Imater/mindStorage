'use strict';
var Storage = require('./storage');
var LocalStorage = require('./storages/local-storage');
var MemoryStorage = require('./storages/memory-storage');
var async = require('async');
var theStorage;

var testStorage = function(TheStorageEngine){
  return function() {
    beforeEach(function() {
      theStorage = new Storage(new TheStorageEngine("table-name"));
    });
    afterEach(function() {
      theStorage.clearAll();
    });
    it('exist', function(){
      expect(Storage).toBeDefined();
    });

    it('can set', function(){
      var exampleObject = {
        id: 100,
        title: "test",
        tags: [1, 2, 3]
      };
      theStorage.set("100", exampleObject, function(err){
        expect(err).toBe(null);
      });
    });

    it('can set and then get', function(){
      var exampleObject = {
        id: 200,
        title: "test",
        tags: [1, 2, 3]
      };
      theStorage.set("200", exampleObject, function(error){
        theStorage.get("200", function(err, item){
          expect(err).toBe(null);
          expect(item.title).toBe('test');
        });
      });
    });

    it('can clear all db', function(done){
      var exampleObject = {
        id: 200,
        title: "test",
        tags: [1, 2, 3]
      };
      async.waterfall([
        function(cb){
          theStorage.set("200", exampleObject, cb);
        },
        function(cb){
          theStorage.get("200", cb);
        },
        function(result, cb){
          expect(result.title).toBe(exampleObject.title);
          theStorage.clearAll(cb);
        },
        function(res, cb){
          theStorage.get("200", cb);
        }
      ], function(err, result){
        expect(err).toBe(null);
        expect(result).toBe(null);
        done();
      });
    });

    it('can change record in db', function(done){
      var exampleObject = {
        id: 200,
        title: "test",
        tags: [1, 2, 3]
      };
      async.waterfall([
        function(cb){
          theStorage.set("200", exampleObject, cb);
        },
        function(cb){
          theStorage.get("200", cb);
        },
        function(result, cb){
          expect(result.title).toBe(exampleObject.title);
          theStorage.clearAll(cb);
        },
        function(res, cb){
          var exampleObjectChanged = JSON.parse(
            JSON.stringify(exampleObject)
          );
          exampleObjectChanged.title = "title is changed";
          theStorage.set("200", exampleObjectChanged, cb);
        },
        function(cb){
          theStorage.get("200", cb);
        }
      ], function(err, result){
        expect(err).toBe(null);
        expect(result.title).toBe("title is changed");
        done();
      });
    });
  };
};

describe('LocalStorage storage', testStorage(LocalStorage));
describe('MemoryStorage storage', testStorage(MemoryStorage));

