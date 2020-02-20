// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  let storage = Object.create(Stack.prototype);
  storage[top] = 0;
};

Stack.prototype.push = stackMethods.push;
Stack.prototype.pop = stackMethods.pop;
Stack.prototype.size = stackMethods.size;

var stackMethods = {
  push: function(value) {},
  pop: function() {},
  size: function() {
    return this.top;
  }
};
