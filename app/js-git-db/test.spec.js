'use strict';

var jsGitDb;
beforeEach(function(){
  jsGitDb = new JsGitDb('John', 'Smith');
});

describe('JsGitDb', function(){

  it('exists', function(){
    expect(JsGitDb).toBeDefined();
  });

  it('can create instance', function(){
    expect(jsGitDb).toBeDefined();
  });

  it('can say name now', function(){
    expect(jsGitDb.sayName()).toBe('John');
  });

});

describe('JsGitDb node', function(){
  it('test', function(){
    expect(jsGitDb.saySurname()).toBeDefined();
  })
});

