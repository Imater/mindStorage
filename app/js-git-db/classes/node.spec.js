var Node = require('./node');
describe('Node', function(){
  it('exist', function(){
    expect(Node).toBeDefined();
  });

  it('id is assigned and uniq', function(){
    node1 = new Node();
    node2 = new Node();
    expect(node1._id).not.toBe(node2._id);
  });

  it('can get id', function(){
    node1 = new Node();
    node2 = new Node();
    expect(node1._id).not.toBe(node2._id);
    expect(node1._id).toBe(node1.id());
  });
});
