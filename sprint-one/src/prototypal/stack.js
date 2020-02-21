// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  let newInstance = Object.create(stackMethods);

  newInstance.top = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {
  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },
  pop: function() {
    let result = this.storage[this.top];

    delete this.storage[this.top];
    this.top--;
    return result;
  },
  size: function() {
    if (this.top < 0) {
      return 0;
    }
    return this.top;
  }
};
// Stack.prototype.push = stackMethods.push;
// Stack.prototype.pop = stackMethods.pop;
// Stack.prototype.size = stackMethods.size;
