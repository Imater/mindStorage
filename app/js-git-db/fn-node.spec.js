var node = require('./fn-node');
describe('fn node', function(){
  it('exist', function(){
    expect(node({a: 'test'}).a).toBe('test');
  })
})
