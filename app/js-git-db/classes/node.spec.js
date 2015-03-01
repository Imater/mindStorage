var Node = require('./node');
describe('Node', function(){
  it('exist', function(){
    expect(Node).toBeDefined();
  });

  it('id is assigned and uniq', function(){
    var node1 = new Node();
    var node2 = new Node();
    expect(node1.getId()).not.toBe(node2.getId());
  });

  it('can get id', function(){
    var node1 = new Node();
    var node2 = new Node();
    expect(node1.getId()).not.toBe(node2.getId());
    expect(node1.getId()).toBe(node1.getId());
  });

  it('create memento and restore', function(done){
    var node1 = new Node(["tree", "note"]);
    node1.createMemento(function(err, memento){
      Node.restoreMemento(memento, function(err, newNode){
        expect(newNode._node.labels[0]).toBe("tree");
        done();
      });
    });
  });
});
