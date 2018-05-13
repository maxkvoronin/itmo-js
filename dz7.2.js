//спеки

describe("y", function() {

  it("сумма производной и квадартного корня", function() {
    assert.equal( y(1), 2);
  });

  it("при X = -1", function() {
    assert( isFinite(y(-1)));
  });

  it("при X = 0", function() {
    assert( isNaN(y(0)));
  });

});