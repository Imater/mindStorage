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

