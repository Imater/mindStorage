var Labels = require('./nodes');
var Label = require('./label');
describe('Label', function(){
  it('exist', function(){
    expect(Label).toBeDefined();
    expect(Labels).toBeDefined();
  });

  it('can set', function(){
    var labels = new Labels();
    var label = new Label("rels", "know", "know mean child");
    labels.set(label);
    console.info("now", JSON.stringify(labels, null, '  '));
    expect(true).toBe(true);
  })
});
