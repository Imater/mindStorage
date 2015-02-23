var Node = require('./node');
describe('Node', function(){
  it('exist', function(){
    expect(Node).toBeDefined();
  });

  it('id is assigned and uniq', function(){
    var node1 = new Node();
    var node2 = new Node();
    expect(node1._id).not.toBe(node2._id);
  });

  it('can get id', function(){
    var node1 = new Node();
    var node2 = new Node();
    expect(node1._id).not.toBe(node2._id);
    expect(node1._id).toBe(node1.id());
  });

  it('create memento and restore', function(done){
    var exampleNode = {
      title: "test",
      tags: [1, 2, 3, 4, 5]
    };
    var node1 = new Node(exampleNode);
    node1.createMemento(function(err, memento){
      Node.restoreMemento(memento, function(err, newNode){
        expect(newNode.title).toBe(exampleNode.title);
        done();
      });
    });
  });
});
