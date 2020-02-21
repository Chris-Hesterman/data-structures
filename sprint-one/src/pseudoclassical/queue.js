// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  this.back = 0;
  this.front = 0;
  this.storage = {};
};

let queueMethods = {
  enqueue: function(value) {
    if (!this.front) {
      this.front++;
    }
    this.back++;
    this.storage[this.back] = value;
  },
  dequeue: function() {
    let result = this.storage[this.front];

    delete this.storage[this.front];
    this.front++;
    return result;
  },
  size: function() {
    if (this.front > this.back || !this.back) {
      return 0;
    }
    return this.back + 1 - this.front;
  }
};

Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
