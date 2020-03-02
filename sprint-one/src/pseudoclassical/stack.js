// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  this.top = 0;
  this.storage = {};
  _.extend(Stack.prototype, stackMethods);
};

let stackMethods = {
  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },
  pop: function() {
    result = this.storage[this.top];
    if (this.top) {
      this.top--;
    }
    return result;
  },
  size: function() {
    return this.top;
  }
};
