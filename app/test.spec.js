'use strict';

describe('test', function(){
  it('must exist', function(){
    expect(JsGitDb).toBeDefined();
  });
  it('must say name', function(){
    var jsGitDb = new JsGitDb('John');
    expect(jsGitDb).toBeDefined();
  });
  it('must say name', function(){
    var jsGitDb = new JsGitDb('John');
    console.info(jsGitDb);
    expect(jsGitDb.sayName()).toBe('John');
  });
});
