// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  let newInstance = {
    storage: {},
    count: 0
  };

  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {
  size: function() {
    if (this.count < 0) {
      this.count = 0;
    }
    return this.count;
  },
  push: function(val) {
    this.count++;
    this.storage[this.count] = val;
  },
  pop: function() {
    let result = this.storage[this.count];

    delete this.storage[this.count];
    this.count--;

    return result;
  }
};
