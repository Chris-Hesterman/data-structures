// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  let newInstance = {
    count: 0
  };

  newInstance.size = stackMethods.size;
  newInstance.push = stackMethods.push;
  newInstance.pop = stackMethods.pop;

  return newInstance;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function(val) {
    this.count++;
    this[this.count] = val;
  },
  pop: function() {
    let tempStorage = this[this.count];

    if (this.count <= 0) {
      return null;
    }
    delete this[this.count];
    this.count--;

    return tempStorage;
  }
};
