'use strict';

var jsGitDb;
beforeEach(function(){
  var options = {
    title: 'Hello'
  };
  jsGitDb = new JsGitDb(options);
});

describe('jsGitDb', function(){
  it('exists', function(){
    expect(JsGitDb).toBeDefined();
  });

  it('can load default parameters', function(){
    expect(jsGitDb.name.length).toBeGreaterThan(0);
  });

  it('can overwrite default options', function(){
    jsGitDb = new JsGitDb({name: "new-name"});
    expect(jsGitDb.name).toBe("new-name");
  });
});

describe('jsGutDb', function(){
  it('can create node', function(){
    jsGitDb
      .node({
        labels: ['Person'],
        props: {
          name: 'Peter'
        }
      })
      .node({
        labels: ['Person'],
        props: {
          name: 'Sveta'
        }
      })
      .know({
        labels: ['Friend'],
        props: {
          name: '12.02.2014'
        }
      })
      .node({
        labels: ['Person'],
        props: {
          name: 'John'
        }
      })
      .node({
        labels: ['Person'],
        props: {
          name: 'Jack'
        }
      })
      .save(function(err, result){
        expect(result.to.length).toBeGreaterThan(0);
        expect(result.from.length).toBeGreaterThan(0);
        expect(result.know.length).toBeGreaterThan(0);
      });
  })
})

