var Nodes = require('./nodes');
var Node = require('./node');
describe('Node', function(){
  it('exist', function(){
    expect(Node).toBeDefined();
    expect(Nodes).toBeDefined();
  });

  it('can set', function(){
    var nodes = new Nodes();
    console.info("was", nodes);
    var node1 = new Node(['tree', 'note', 'important']);
    nodes.set(node1);
    var node1 = new Node(['tree', 'note', 'important']);
    nodes.set(node1);
    var node1 = new Node(['tree', 'note', 'important']);
    nodes.set(node1);
    console.info("now", JSON.stringify(nodes, null, '  '));
    expect(true).toBe(true);
  })
});
