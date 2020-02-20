// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  let newInstance = {
    storage: {},
    front: 0,
    back: 0
  };
  newInstance.enqueue = queueMethods.enqueue;
  newInstance.dequeue = queueMethods.dequeue;
  newInstance.size = queueMethods.size;

  return newInstance;
};

var queueMethods = {
  enqueue: function(val) {
    if (!this.front) {
      this.front++;
    }
    this.back++;
    this.storage[this.back] = val;
  },
  dequeue: function() {
    let result;

    result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return result;
  },
  size: function() {
    if (this.back + 1 - this.front <= 0 || this.back === 0) {
      return 0;
    }
    return this.back + 1 - this.front;
  }
};
