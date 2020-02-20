// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  let newInstance = Object.create(Queue.prototype);
  newInstance.front = 0;
  newInstance.back = 0;
  newInstance.storage = {};

  return newInstance;
};

var queueMethods = {
  enqueue(value) {
    if (!this.front) {
      this.front++;
    }
    this.back++;
    this.storage[this.back] = value;
  },
  dequeue() {
    let result = this.storage[this.front];

    delete this.storage[this.front];
    if (this.back >= this.front) {
      this.front++;
    }
    return result;
  },
  size() {
    if (this.front > this.back || !this.back) {
      return 0;
    }
    return this.back + 1 - this.front;
  }
};
Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
