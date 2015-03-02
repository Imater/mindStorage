var Nodes = require('./nodes');
var Node = require('./node');
describe('Node', function(){
  it('exist', function(){
    expect(Node).toBeDefined();
    expect(Nodes).toBeDefined();
  });

  it('can set', function(){
    var nodes = new Nodes();
    var node1 = new Node(['tree', 'note', 'important']);
    nodes.set(node1);
    expect(node1).toBeDefined();
  })
});
